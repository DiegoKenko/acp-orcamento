import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { produtos,table1,table2,table3,table4,table5,table6 } from './mock-tables';
import { ProtheusLibCoreModule, ProUserInfo } from '@totvs/protheus-lib-core';
import { ProAppConfigService, ProThreadInfoService, ProAdapterListInterface, ProAdapterBaseV2, ProAdapterQueryInterface, ProBranchService, ProBranchList } from '@totvs/protheus-lib-core';

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
  imports: [CommonModule, HttpClientModule, FormsModule],
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


  constructor(private http: HttpClient,
    private proAppConfigService: ProAppConfigService,
    private proThreadInfoService: ProThreadInfoService,
    private proBranchService: ProBranchService
  ) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{"access_token": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InBKd3RQdWJsaWNLZXlGb3IyNTYifQ.eyJpc3MiOiJUT1RWUy1BRFZQTC1GV0pXVCIsInN1YiI6ImRhbmllbC5hdGlsaW8iLCJpYXQiOjE3MjI5NDIwMTgsInVzZXJpZCI6IjAwMDAwMyIsImV4cCI6MTcyMjk0NTYxOCwiZW52SWQiOiJQUk9USEVVUyJ9.BAHBN2yYwJ8MBtLa8KYMA3K6q73zRuLognoLP42OiebwzmWQdhdgeTrcLgROiJ7ygtHSFFswa2EXRTEIeH87FZfZOr-OztVtNNch0QXl9E2575vqBFJAdfWgcqBzjfYcVrHvrAU2lfrlYqWt88VHhe4_7cZEsP0pJuHDbPa_w4nvORNVipKCiO0bAZhysJbpi2pJ67IjFIaE5PM6YuZmpbYsRyAj4eJ9ZkFdGO7DxYI5V5ENftyBKOYprwbCt0XlNxcF2bkZsnU8McPXWBBi-fvx-t6FaVuvOMQVwY8bq7495j8cryNY4iF5u_HrufoFvfe9uhNX83971n04LkUjQw","refresh_token": "ebbLIvUOXDSG-NQizmlBzUEB.bqXuLtkjSz6F0cNq4H8EgH8484gSk17_1bnm6odXXh0f9CjJAQxZ0pBqm4_S0wGQKHCpLFnbMygMDi33lMReQObOvwN9jBGmTeC3cYESR_0LYCwYiiLDH9W-fw24qXi7F18F8co866c5KkwOmQVbeX1CF22eVCWT8EmjRvOF2wp5cIpSyuuuaOnkkNT_3tCziR7KVAET4yHjZ_0qFfw8yzDA.BgC_0FQVaNGIzUpv7cmUBVJI7LU58Oolri7UaqBDFd7jpbtYmyBzY8CxRkTFKITTfZ0vT7xEndkfE7osp_cRfONAfe54hln-3EmrjpZDPCWdg2-N2KP9XDnn8mDNderpxJKO3-fYiPEWVAgH8QUC5EdMmMWggSWFdmmJZNP9-aQ70KbnNeR0TpOg2kLcCGzK9GBILRuFWSD9uqnIBMUJDtw55QkIeRYk2oZK6nlX17SjJd_uK5kcFA7cGSDwK1wQvO0JLKsPa0YhbHrEtKbFH7PLaxoXzi4Jg6xB6n0fqAv0tGxs_1ZlkxUdXel4bc7TDYe8SpiIaw0kSZHFVUIg7A","scope": "default","token_type": "Bearer","expires_in": 3600}');
    }
    else {
      sessionStorage.setItem("insideProtheus", "1");
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
    if (confirm('Tem certeza que deseja sair e salva ACP?')) {
      this.closeApp();
    }
    
  }
  onCancelar() {
    if (confirm('Tem certeza que deseja sair e não salvar ACP?')) {
      this.closeApp();
    }
  }

  closeApp() {
    if (this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.callAppClose();
    } else {
      alert("Clique não veio do Protheus");
    }
  }



}
