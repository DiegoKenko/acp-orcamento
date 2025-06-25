// mock-tables.ts
// Mock data for all tables in the ACP workflow UI, except ACPs
import { ModelEspecificacao, TipoEspecificacao } from './model.acp';
import { ModelProdutoItem } from './model.produto';

// Produtos table (Table 8)
export const produtos: ModelProdutoItem[] = [
  {
    id: '023211', item: '001', produto: 'MULTIBORO ACIDO BORICO F SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023212', item: '002', produto: 'MULTICOBALTO 20 SULFATO DE COBALTO HEPTA NA SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023213', item: '003', produto: 'MULTICOBRE SULFATO DE COBRE PENTA NA SCS SS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023214', item: '004', produto: 'MULTICOBRE SULFATO DE COBRE PENTA F SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023215', item: '005', produto: 'MULTICOBRE 35 SULFATO DE COBRE MONO NA SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023216', item: '006', produto: 'MULTICOBRE 35 SULFATO DE COBRE MONO F SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023217', item: '007', produto: 'MULTIFER 19 SULFATO FERROSO HEPTA NA SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023218', item: '008', produto: 'MULTIFER 19 SULFATO FERROSO HEPTA F SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023219', item: '009', produto: 'MULTIFER 30 SULFATO FERROSO MONO NA SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  },
  {
    id: '023220', item: '010', produto: 'MULTIFER 30 SULFATO FERROSO MONO F SCS', quantidade: 100, dataEntrega: '2025-07-01',
    descricao: '',
    preco: 0
  }
];
// Table 1: Embalagem e paletização
export const table1: ModelEspecificacao[] = [
  {
    especificacao: 'Sacaria', complemento: '026127', id: 'emb-001', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Big Bags', complemento: 'Brancos', id: 'emb-002', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Big Bags', complemento: 'novos', id: 'emb-003', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets', complemento: '1000kg', id: 'emb-004', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets', complemento: '1200kg', id: 'emb-005', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets', complemento: '1350kg', id: 'emb-006', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets', complemento: '1375kg', id: 'emb-007', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets', complemento: '1500kg', id: 'emb-008', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Envolver com stretch', complemento: 'Filme plástico', id: 'emb-009', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Inserir papelão', complemento: 'Embaixo dos pallets', id: 'emb-010', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Palletização específica', complemento: '48 sacos/pallet', id: 'emb-011', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Palletização específica', complemento: '56 sacos/pallet', id: 'emb-012', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-013', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Não sobrepor paletes', complemento: '', id: 'emb-014', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets de madeira', complemento: 'Padrão, tratado, altura do calço', id: 'emb-015', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Um lote por pallet', complemento: '', id: 'emb-016', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Máximo de 2 ou 3 lotes', complemento: 'Por carga/embarque', id: 'emb-017', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Lote único para toda a carga', complemento: '', id: 'emb-018', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-019', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Validade mínima', complemento: '24 meses', id: 'emb-020', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Validade mínima', complemento: '1 ano', id: 'emb-021', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Validade mínima', complemento: '90 dias', id: 'emb-022', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Máximo de 4 sublotes', complemento: '', id: 'emb-023', global: false,
    tipo: TipoEspecificacao.emba
  }
];

// Table 2: Etiquetas e identificação
export const table2: ModelEspecificacao[] = [
  {
    especificacao: 'Layout do cliente', complemento: '', id: 'etq-001', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'lote obrigatório', complemento: ': ', id: 'etq-001', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Autocolante', complemento: '', id: 'etq-002', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Em espanhol', complemento: '', id: 'etq-003', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Branca pequena', complemento: '', id: 'etq-004', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Enviada por cliente', complemento: '', id: 'etq-005', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Grau técnico', complemento: '', id: 'etq-006', global: false,
    tipo: TipoEspecificacao.emba
  }
];

// Table 3: Químicos - geral
export const table3: ModelEspecificacao[] = [
  {
    especificacao: 'Resíduo insolúvel máximo', complemento: '', id: '1-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'solução incolor,', complemento: '', id: '2-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Solubilidade', complemento: '', id: '2-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emba
  }
];

// Table 4: Químicos - por faixa
export const table4: ModelEspecificacao[] = [
  {
    especificacao: 'Magnésio', complemento: '', min: 10, max: 20, unidade: '%', id: '1-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Cobre', complemento: '', min: 21, max: 30, unidade: '%', id: '2-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Mânganes', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Umidade', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'pH', complemento: '', min: 5, max: 10, unidade: 'pH', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emba
  }
];

// Table 5: Logística e Transporte
export const table5: ModelEspecificacao[] = [
  {
    especificacao: 'Horário de entrega ', complemento: 'Ex: 6h às 15h', id: 'log-001', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Não aceitar Bitrem ou Rodotrem', complemento: '', id: 'log-002', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Caminhão só com guarda baixa', complemento: '', id: 'log-003', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Não aceitar caminhão graneleiro grade alta', complemento: '', id: 'log-004', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Fotos obrigatórias', complemento: 'Carga, etiquetas, processo de carregamento, etc.', id: 'log-005', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Pallets devem ser posicionados', complemento: 'Acesso com transpaleteira elétrica', id: 'log-006', global: true,
    tipo: TipoEspecificacao.emba
  },
  {
    especificacao: 'Fotos da carga paletizada', complemento: 'Devem ser tiradas e enviadas na data do carregamento', id: 'log-007', global: true,
    tipo: TipoEspecificacao.emba
  }
];
