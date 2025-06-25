import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { table1, table2, table3, table4, table5 } from './mock-tables';
import { ProtheusLibCoreModule, ProAppConfigService } from '@totvs/protheus-lib-core';
import { AppDatasourceComponent } from './app.datasource.component';
import { ModelProdutoItem } from './model.produto';
import { ModelEspecificacao } from './model.acp';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProtheusLibCoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'acp-orcamento';
  tableEmba: ModelEspecificacao[] = table1;
  tableEtic: ModelEspecificacao[] = table2;
  tableQuig: ModelEspecificacao[] = table3;
  tableQuie: ModelEspecificacao[] = table4;
  tableLogs: ModelEspecificacao[] = table5;
  produtos: ModelProdutoItem[] = [];

  selectedTable8Index: number = 0;

  orcamento: string = '';
  empresa: string = '';

  // Map to track selected items for each Table 8 row
  selectedItemsByTable8: { [key: number]: ModelEspecificacao[] } = {};

  // Table 7 (ACPs): Aggregated, deduplicated list for the right-side table
  acpsCarregadas: ModelEspecificacao[] = [];

  globalSearch: string = '';
  filteredTables: ModelEspecificacao[][] = [];

  produtosColumns = [
    { property: 'id', label: 'ID' },
    { property: 'produto', label: 'Produto', },
    { property: 'quantidade', label: 'Quantidade' },
    { property: 'data', label: 'Data de entrega', }
  ];

  especificacoes: any[] = [];

  acpsPredefinidos: any[] = [];

  loadingProdutos = false;
  loadingEspecificacoes = false;
  loadingAcpsPredefinidos = false;

  constructor(
    private proAppConfigService: ProAppConfigService,
    private datasource: AppDatasourceComponent
  ) {
    if (!this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      console.log('AppConfig loaded:', this.proAppConfigService);
    }
    this.orcamento = sessionStorage.getItem('orcamento') || '180729';
    this.empresa = sessionStorage.getItem('empresa') || '01';
  }

  fetchProdutos() {
    this.loadingProdutos = true;
    const empresa = this.empresa;
    const orcamento = this.orcamento;
    this.datasource.fetchProdutos(empresa, orcamento).subscribe({

      next: (res) => {
        this.produtos = (res.data || []).map((item: any) => ModelProdutoItem.fromJson(item));
        this.loadingProdutos = false;
      },
      error: (err) => {
        this.loadingProdutos = false;
        console.error('Erro ao buscar produtos da API:', err);
      }
    });
  }

  fetchEspecificacoes() {
    this.loadingEspecificacoes = true;
    this.datasource.fetchEspecificacoes().subscribe({
      next: (res) => {
        this.especificacoes = (res.data || []).map((item: any) => ModelEspecificacao.fromJson(item));
        this.loadingEspecificacoes = false;
      },
      error: (err) => {
        this.loadingEspecificacoes = false;
        console.error('Erro ao buscar especificações da API:', err);
      }
    });
  }

  fetchAcpsPredefinidos() {
    this.loadingAcpsPredefinidos = true;
    this.datasource.fetchAcpsPredefinidos(this.orcamento, this.empresa).subscribe({
      next: (res) => {
        this.acpsPredefinidos = (res.data || []).map((item: any) => ModelEspecificacao.fromJson(item));
        this.loadingAcpsPredefinidos = false;
      },
      error: (err) => {
        this.loadingAcpsPredefinidos = false;
        console.error('Erro ao buscar itens predefinidos de ACPs:', err);
      }
    });
  }

  ngOnInit() {
    this.fetchProdutos();
    this.fetchAcpsPredefinidos();
    this.fetchEspecificacoes();
  }

  isChecked(item: ModelEspecificacao): boolean {
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    return selected.some(i =>
      i.produto === item.produto &&
      i.especificacao === item.especificacao &&
      i.complemento === item.complemento
    );
  }

  isCheckLogistica(item: ModelEspecificacao): boolean {
    // For 'Logística e Transporte' items (Table 7), check if any item in the selected items matches
    return this.acpsCarregadas.some(i =>
      i.especificacao === item.especificacao &&
      i.complemento === item.complemento
    );
  }

  // --- Place updateacpsCarregadas before toggleacpsCarregadas for correct usage ---
  updateacpsCarregadas(uncheckedItem?: ModelEspecificacao) {
    // Aggregate all selected items from all products, setting the correct produto
    const newItems: ModelEspecificacao[] = Object.entries(this.selectedItemsByTable8).flatMap(([table8Index, items]) =>
      items.map(item => ({
        ...item,
        produto: this.produtos[Number(table8Index)]?.produto || ''
      }))
    );
    // Remove only the item that is being unchecked, if provided
    if (uncheckedItem) {
      this.acpsCarregadas = this.acpsCarregadas.filter(existing =>
        !(
          existing.especificacao === uncheckedItem.especificacao &&
          existing.complemento === uncheckedItem.complemento &&
          existing.produto === uncheckedItem.produto
        )
      );
    }
    // Only add new items to acpsCarregadas, do not remove previous ones
    newItems.forEach(newItem => {
      const exists = this.acpsCarregadas.some(existing =>
        existing.especificacao === newItem.especificacao &&
        existing.complemento === newItem.complemento &&
        existing.produto === newItem.produto
      );
      if (!exists) {
        this.acpsCarregadas.push(newItem);
      }
    });
  }

  toggleacpsCarregadas(item: ModelEspecificacao, checked: boolean) {
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    const produto = this.produtos[this.selectedTable8Index]?.produto || '';
    const itemWithProduto = { ...item, produto };
    if (checked) {
      // Add to selectedItemsByTable8 if not present
      if (!selected.some(i => i.produto === item.produto && i.especificacao === item.especificacao && i.complemento === item.complemento)) {
        this.selectedItemsByTable8[this.selectedTable8Index] = [...selected, { ...item }];
      }
      // Add to acpsCarregadas if not present
      const exists = this.acpsCarregadas.some(existing =>
        existing.especificacao === itemWithProduto.especificacao &&
        existing.complemento === itemWithProduto.complemento &&
        existing.produto === itemWithProduto.produto
      );
      if (!exists) {
        this.acpsCarregadas.push(itemWithProduto);
      }
    } else {
      // Remove from selectedItemsByTable8
      this.selectedItemsByTable8[this.selectedTable8Index] = selected.filter(i =>
        !(i.produto === item.produto && i.especificacao === item.especificacao && i.complemento === item.complemento)
      );
      // Remove from acpsCarregadas
      this.acpsCarregadas = this.acpsCarregadas.filter(existing =>
        !(
          existing.especificacao === itemWithProduto.especificacao &&
          existing.complemento === itemWithProduto.complemento &&
          existing.produto === itemWithProduto.produto
        )
      );
    }
  }

  toggleacpsCarregadasLogistica(item: ModelEspecificacao, checked: boolean) {
    if (checked) {
      // Add item to acpsCarregadas if not already present
      if (!this.acpsCarregadas.some(i => i.especificacao === item.especificacao && i.complemento === item.complemento)) {
        this.acpsCarregadas.push({ ...item, id: item.id || '', produto: '' }); // Add empty produto for Table 7
      }
    } else {
      // Remove item from acpsCarregadas
      this.acpsCarregadas = this.acpsCarregadas.filter(i => !(i.especificacao === item.especificacao && i.complemento === item.complemento));
    }
  }

  // Handle changes to 'min' and 'max' columns in 'Químicos - por faixa' (table 2)
  onMinChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      const num = input.value.replace(/[^0-9.]/g, '');
      this.tableQuie[index].complemento = num;
    }
  }

  onMaxChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      const num = input.value.replace(/[^0-9.]/g, '');
      // Store max value in a new property on the ModelEspecificacao if needed, or handle as required
      (this.tableQuie[index] as any).max = num;
    }
  }

  // Handle changes to 'UM' column in 'Químicos - por faixa' (table 2)
  onUmChange(index: number, event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (input && typeof input.value === 'string') {
      this.tableQuie[index].especificacao = input.value;
    }
  }

  // Global search and filtering for all tables
  onGlobalSearch() {
    const normalize = (str: string) => str ? str.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase() : '';
    const search = normalize(this.globalSearch.trim());
    if (!search) {
      this.filteredTables = [
        this.tableEmba,
        this.tableEtic,
        this.tableQuig,
        this.tableQuie,
        this.tableLogs
      ];
      return;
    }
    this.filteredTables = [
      this.tableEmba,
      this.tableEtic,
      this.tableQuig,
      this.tableQuie,
      this.tableLogs
    ].map(table =>
      table.filter(item =>
        normalize(item.especificacao).includes(search)
      )
    );
  }

  getFilteredTables(): ModelEspecificacao[][] {
    return this.filteredTables && this.filteredTables.length ? this.filteredTables : [
      this.tableEmba,
      this.tableEtic,
      this.tableQuig,
      this.tableQuie,
      this.tableLogs
    ];
  }

  onConfirmar() {
    if (confirm('Tem certeza que deseja sair e salvar ACP?')) {
      this.proAppConfigService.callAppClose();
    }

  }
  onCancelar() {
    if (confirm('Tem certeza que deseja sair e não salvar ACP?')) {
      this.proAppConfigService.callAppClose();
    }
  }

  // Returns true if the column is a checkbox column (by header text or class)
  isCheckboxCol(header: string): boolean {
    return header.toLowerCase().includes('checkbox') || header.toLowerCase().includes('selecionar') || header.toLowerCase().includes('');
  }

  // Handles column resizing
  onResizeColumn(event: MouseEvent) {
    const th = (event.target as HTMLElement).closest('th');
    if (!th) return;
    const startX = event.pageX;
    const startWidth = th.offsetWidth;
    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = startWidth + (moveEvent.pageX - startX);
      th.style.width = newWidth + 'px';
    };
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

}
