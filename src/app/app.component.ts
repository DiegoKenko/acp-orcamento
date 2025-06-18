import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { produtos, table1, table2, table3, table4, table5, table6 } from './mock-tables';
import { ProtheusLibCoreModule, ProAppConfigService } from '@totvs/protheus-lib-core';

export interface TableItem {
  produto: string;
  especificacao: string;
  complemento: string;
  min?: number; // Minimum value for numeric fields
  max?: number; // Maximum value for numeric fields
  unidade?: string; // Unit of measurement, if applicable
  parentIndex?: number; // Index of Table 8 item if applicable
  id?: string; // Unique, invisible identifier for all tables except 'Produtos' and 'ACPs'
}

export interface Table8Item {
  id: string; // Unique identifier for Table 8 items
  produto: string; // Product name
  quantidade: number; // Specification
  data: string; // Complementary information
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProtheusLibCoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'acp-orcamento';
  tables: TableItem[][] = [table1, table2, table3, table4, table5];
  produtos: Table8Item[] = produtos;

  selectedTable8Index: number = 0;

  // Map to track selected items for each Table 8 row
  selectedItemsByTable8: { [key: number]: TableItem[] } = {};

  // Table 7 (ACPs): Aggregated, deduplicated list for the right-side table
  table7: TableItem[] = [];

  globalSearch: string = '';
  filteredTables: TableItem[][] = [];

  constructor(private proAppConfigService: ProAppConfigService) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
    }
  }

  ngOnInit() {


    this.filteredTables = this.tables.map(table => [...table]);
  }

  isChecked(item: TableItem): boolean {
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    return selected.some(i =>
      i.produto === item.produto &&
      i.especificacao === item.especificacao &&
      i.complemento === item.complemento
    );
  }

  toggleTable7(item: TableItem, checked: boolean) {
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    if (checked) {
      if (!selected.some(i => i.produto === item.produto && i.especificacao === item.especificacao && i.complemento === item.complemento)) {
        this.selectedItemsByTable8[this.selectedTable8Index] = [...selected, { ...item }];
      }
    } else {
      this.selectedItemsByTable8[this.selectedTable8Index] = selected.filter(i =>
        !(i.produto === item.produto && i.especificacao === item.especificacao && i.complemento === item.complemento)
      );
    }
    this.updateTable7();
  }

  addToTable7(item: TableItem) {
    this.toggleTable7(item, true);
  }

  updateTable7() {
    // Flatten all selected items for all Table 8 rows, but keep only unique items per Table 8 row and unique by id+produto
    const seen = new Set<string>();
    this.table7 = Object.entries(this.selectedItemsByTable8).flatMap(([table8Index, items]) =>
      items.filter(item => {
        // Unique key: id + produto (table8Index)
        const key = (item.id || '') + '-' + (this.produtos[Number(table8Index)]?.produto || '');
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      }).map(item => ({
        produto: this.produtos[Number(table8Index)]?.produto || '', // Produto
        especificacao: item.produto || '', // Especificação
        complemento: item.especificacao || '', // Complemento
        id: (item.id || '') + '-' + (this.produtos[Number(table8Index)]?.produto || '')
      }))
    );
  }

  // Helper to get items for tables 1-6 filtered by selected Table 8
  getFilteredTables(): TableItem[][] {
    // If you want to filter tables 1-6 based on the selected Table 8 (produtos) row,
    // you can use the selectedTable8Index and the produto name as a filter key.
    // Example: only show items whose produto matches the selected produto in Table 8.
    const selectedProduto = this.produtos[this.selectedTable8Index]?.produto;
    if (!selectedProduto) {
      return this.tables;
    }
    // For each table, filter items by produto matching the selected Table 8 produto
    return this.tables.map(table =>
      table.filter(item =>
        item.produto === selectedProduto
      )
    );
  }

  // Handle changes to 'min' and 'max' columns in 'Químicos - por faixa' (table 2)
  onMinChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      const num = input.value.replace(/[^0-9.]/g, '');
      this.tables[2][index].complemento = num;
    }
  }

  onMaxChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      const num = input.value.replace(/[^0-9.]/g, '');
      // Store max value in a new property on the TableItem if needed, or handle as required
      (this.tables[2][index] as any).max = num;
    }
  }

  // Handle changes to 'UM' column in 'Químicos - por faixa' (table 2)
  onUmChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      this.tables[2][index].especificacao = input.value;
    }
  }

  onGlobalSearch() {
    // Remove accents and make search case-insensitive
    const normalize = (str: string) => str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
    const search = normalize(this.globalSearch.trim());
    if (!search) {
      this.filteredTables = this.tables.map(table => [...table]);
      return;
    }
    this.filteredTables = this.tables.map(table =>
      table.filter(item =>
        Object.values(item).some(val =>
          typeof val === 'string' && normalize(val).includes(search)
        )
      )
    );
  }

  onConfirmar() {
    if (confirm('Tem certeza que deseja sair e salvar ACP?')) {
      this.closeApp();
    }

  }
  onCancelar() {
    if (confirm('Tem certeza que deseja sair e não salvar ACP?')) {
      this.closeApp();
    }
  }

  closeApp() {
    // Logic to close the app, e.g., navigate to a different route or close the window
    // For example, if using Angular Router:
    // this.router.navigate(['/home']);
    // Or if you want to close the window:
    window.close();
  }



}
