// mock-tables.ts
// Mock data for all tables in the ACP workflow UI, except ACPs
import { ModelEspecificacao, TipoEspecificacao } from './model.acp';


// Table 1: Embalagem e paletização
export const table1: ModelEspecificacao[] = [
  {
    codEspecificacao: '001', descEspecificacao: 'Sacaria', complemento: '026127', id: 'emb-001', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Big Bags', complemento: 'Brancos', id: 'emb-002', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Big Bags', complemento: 'novos', id: 'emb-003', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets', complemento: '1000kg', id: 'emb-004', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets', complemento: '1200kg', id: 'emb-005', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets', complemento: '1350kg', id: 'emb-006', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets', complemento: '1375kg', id: 'emb-007', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets', complemento: '1500kg', id: 'emb-008', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Envolver com stretch', complemento: 'Filme plástico', id: 'emb-009', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Inserir papelão', complemento: 'Embaixo dos pallets', id: 'emb-010', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Palletização específica', complemento: '48 sacos/pallet', id: 'emb-011', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Palletização específica', complemento: '56 sacos/pallet', id: 'emb-012', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-013', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Não sobrepor paletes', complemento: '', id: 'emb-014', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets de madeira', complemento: 'Padrão, tratado, altura do calço', id: 'emb-015', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Um lote por pallet', complemento: '', id: 'emb-016', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Máximo de 2 ou 3 lotes', complemento: 'Por carga/embarque', id: 'emb-017', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Lote único para toda a carga', complemento: '', id: 'emb-018', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-019', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Validade mínima', complemento: '24 meses', id: 'emb-020', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Validade mínima', complemento: '1 ano', id: 'emb-021', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Validade mínima', complemento: '90 dias', id: 'emb-022', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Máximo de 4 sublotes', complemento: '', id: 'emb-023', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  }
];

// Table 2: Etiquetas e identificação
export const table2: ModelEspecificacao[] = [
  {
    codEspecificacao: '001', descEspecificacao: 'Layout do cliente', complemento: '', id: 'etq-001', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'lote obrigatório', complemento: ': ', id: 'etq-001', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Autocolante', complemento: '', id: 'etq-002', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Em espanhol', complemento: '', id: 'etq-003', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Branca pequena', complemento: '', id: 'etq-004', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Enviada por cliente', complemento: '', id: 'etq-005', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Grau técnico', complemento: '', id: 'etq-006', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  }
];

// Table 3: Químicos - geral
export const table3: ModelEspecificacao[] = [
  {
    codEspecificacao: '001', descEspecificacao: 'Resíduo insolúvel máximo', complemento: '', id: '1-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'solução incolor,', complemento: '', id: '2-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Solubilidade', complemento: '', id: '2-quimicosgeral', global: false,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  }
];

// Table 4: Químicos - por faixa
export const table4: ModelEspecificacao[] = [
  {
    codEspecificacao: '001', descEspecificacao: 'Magnésio', complemento: '', min: 10, max: 20, unidade: '%', id: '1-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emb,
    seq: ''
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Cobre', complemento: '', min: 21, max: 30, unidade: '%', id: '2-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emb,
    seq: ''
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Mânganes', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emb,
    seq: ''
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Umidade', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emb,
    seq: ''
  },
  {
    codEspecificacao: '001', descEspecificacao: 'pH', complemento: '', min: 5, max: 10, unidade: 'pH', id: '3-quimicosfaixa', global: false,
    tipo: TipoEspecificacao.emb,
    seq: ''
  }
];

// Table 5: Logística e Transporte
export const table5: ModelEspecificacao[] = [
  {
    codEspecificacao: '001', descEspecificacao: 'Horário de entrega ', complemento: 'Ex: 6h às 15h', id: 'log-001', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Não aceitar Bitrem ou Rodotrem', complemento: '', id: 'log-002', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Caminhão só com guarda baixa', complemento: '', id: 'log-003', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Não aceitar caminhão graneleiro grade alta', complemento: '', id: 'log-004', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Fotos obrigatórias', complemento: 'Carga, etiquetas, processo de carregamento, etc.', id: 'log-005', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Pallets devem ser posicionados', complemento: 'Acesso com transpaleteira elétrica', id: 'log-006', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  },
  {
    codEspecificacao: '001', descEspecificacao: 'Fotos da carga paletizada', complemento: 'Devem ser tiradas e enviadas na data do carregamento', id: 'log-007', global: true,
    tipo: TipoEspecificacao.emb,
    seq: '',
    unidade: '',
    min: 0,
    max: 0
  }
];
