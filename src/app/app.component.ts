import { Component, OnInit, OutputEmitterRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { table1, table2, table3, table4, table5 } from './mock-tables';
import { ProtheusLibCoreModule, ProAppConfigService } from '@totvs/protheus-lib-core';
import { AppDatasourceComponent } from './app.datasource.component';
import { ModelProdutoItem } from './model.produto';
import { ModelEspecificacao, TipoEspecificacao } from './model.acp';



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

        this.fetchAcpsPredefinidos();
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
        let especificacoes = (res.data || []).map((item: any) => ModelEspecificacao.fromJson(item));
        // Spread especificacoes into the correct tables by 'tipo'
        this.tableEmba = especificacoes.filter(e => e.tipo === TipoEspecificacao.emb);
        this.tableEtic = especificacoes.filter(e => e.tipo === TipoEspecificacao.eti);
        this.tableQuig = especificacoes.filter(e => e.tipo === TipoEspecificacao.q01);
        this.tableQuie = especificacoes.filter(e => e.tipo === TipoEspecificacao.q02);
        this.tableLogs = especificacoes.filter(e => e.tipo === TipoEspecificacao.log);
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
        let temp = (res.data || []).map((item: any) => ModelEspecificacao.fromJson(item));
        this.loadingAcpsPredefinidos = false;

        // For each ACP, fill the seq column from the matching produto
        temp.forEach(acp => {
          const matchingProduto = this.produtos.find(prod => {
            return (prod.codProduto).trimEnd() === (acp.codProduto || '').trimEnd();
          });
          if (matchingProduto) {
            acp.seq = matchingProduto.seq;
            acp.codProduto = matchingProduto.codProduto
          }
        });

        this.acpsCarregadas = temp;
      },
      error: (err) => {
        this.loadingAcpsPredefinidos = false;
        console.error('Erro ao buscar itens predefinidos de ACPs:', err);
      }
    });
  }

  ngOnInit() {
    this.fetchProdutos();
    this.fetchEspecificacoes();
  }

  isChecked(item: ModelEspecificacao): boolean {
    item.seq = this.produtos[this.selectedTable8Index].seq ;
    item.codProduto = this.produtos[this.selectedTable8Index].codProduto;
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    return selected.some(i => mesmaEspecificacao(i, item))
  }

  isCheckLogistica(item: ModelEspecificacao): boolean {
    return this.acpsCarregadas.some(i => mesmaEspecificacao(i, item));
  }

  // --- Place updateacpsCarregadas before toggleacpsCarregadas for correct usage ---
  updateacpsCarregadas(uncheckedItem?: ModelEspecificacao) {
    // Aggregate all selected items from all products, setting the correct produto
    const newItems: ModelEspecificacao[] = Object.entries(this.selectedItemsByTable8).flatMap(([table8Index, items]) =>
      items.map(item => ({
        ...item,
        produto: this.produtos[Number(table8Index)].codProduto,
        seq: this.produtos[Number(table8Index)].seq

      }))
    );
    // Remove only the item that is being unchecked, if provided
    if (uncheckedItem) {
      this.acpsCarregadas = this.acpsCarregadas.filter(existing => !mesmaEspecificacao(existing, uncheckedItem));
    }
    // Only add new items to acpsCarregadas, do not remove previous ones
    newItems.forEach(newItem => {
      const exists = this.acpsCarregadas.some(existing => mesmaEspecificacao(existing, newItem));
      if (!exists) {
        this.acpsCarregadas.push(newItem);
      }
    });
  }

  toggleacpsCarregadas(item: ModelEspecificacao, checked: boolean) {
    const selected = this.selectedItemsByTable8[this.selectedTable8Index] || [];
    item.codProduto = this.produtos[this.selectedTable8Index].codProduto ;
    item.seq = this.produtos[this.selectedTable8Index].seq;
    const itemWithProduto = { ...item };
    if (checked) {
      // Add to selectedItemsByTable8 if not present
      if (!selected.some(i => mesmaEspecificacao(i, item))) {
        this.selectedItemsByTable8[this.selectedTable8Index] = [...selected, { ...item}];
      }
      // Add to acpsCarregadas if not present
      const exists = this.acpsCarregadas.some(existing => mesmaEspecificacao(existing, itemWithProduto));
      if (!exists) {
        this.acpsCarregadas.push(itemWithProduto);
      }
    } else {
      // Remove from selectedItemsByTable8
      this.selectedItemsByTable8[this.selectedTable8Index] = selected.filter(i => !mesmaEspecificacao(i, item));
      // Remove from acpsCarregadas
      this.acpsCarregadas = this.acpsCarregadas.filter(existing => !mesmaEspecificacao(existing, itemWithProduto));
    }
  }

  toggleacpsCarregadasLogistica(item: ModelEspecificacao, checked: boolean) {
    if (checked) {
      // Add item to acpsCarregadas if not already present
      if (!this.acpsCarregadas.some(i => mesmaEspecificacao(i, item))) {
        this.acpsCarregadas.push({ ...item, id: item.id, codProduto: item.codProduto }); // Add empty produto for Table 7
      }
    } else {
      // Remove item from acpsCarregadas
      this.acpsCarregadas = this.acpsCarregadas.filter(i => !mesmaEspecificacao(i, item));
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
        normalize(item.descEspecificacao).includes(search)
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

  trackByItem(index: number, item: any) {
    return item.item + '_' + item.codProduto + '_' + item.especificacao;
  }

removeAcpCarregadas(item: ModelEspecificacao) {
  // Uncheck in the owner table (remove from selectedItemsByTable8)
  const updatedSelected: { [key: number]: ModelEspecificacao[] } = {};
  Object.keys(this.selectedItemsByTable8).forEach(key => {
    const numericKey = Number(key);
    updatedSelected[numericKey] = (this.selectedItemsByTable8[numericKey] || []).filter(i => !mesmaEspecificacao(i, item));
  });
  this.selectedItemsByTable8 = { ...updatedSelected };
  this.acpsCarregadas = this.acpsCarregadas.filter(i => !mesmaEspecificacao(i, item));
}

  descricao(esp: ModelEspecificacao): string {
  if (esp.min != 0 || esp.max != 0) {
    if (esp.max == 0) {
      return `${esp.complemento} a partir de ${esp.min}${esp.unidade} `;
    } else if (esp.min == 0) {
      return `${esp.complemento} até ${esp.max}${esp.unidade} `;
    } else {
      return `${esp.complemento} entre ${esp.min}${esp.unidade} e ${esp.max}${esp.unidade} `;
    }
  } else {
    return esp.complemento || '';
  }
}
}

function mesmaEspecificacao(a: ModelEspecificacao, b: ModelEspecificacao): boolean {
  return a.codProduto === b.codProduto &&
    a.codEspecificacao === b.codEspecificacao &&
    a.complemento === b.complemento &&
    a.tipo === b.tipo &&
    a.seq === b.seq;
}

