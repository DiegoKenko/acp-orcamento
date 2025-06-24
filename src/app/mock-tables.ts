// mock-tables.ts
// Mock data for all tables in the ACP workflow UI, except ACPs
import { Table8Item, TableItem } from './app.component';

// Produtos table (Table 8)
export const produtos: Table8Item[] = [
  { id: '023211', item: '001', produto: 'MULTIBORO ACIDO BORICO F SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023212', item: '002', produto: 'MULTICOBALTO 20 SULFATO DE COBALTO HEPTA NA SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023213', item: '003', produto: 'MULTICOBRE SULFATO DE COBRE PENTA NA SCS SS', quantidade: 100, data: '2025-07-01' },
  { id: '023214', item: '004', produto: 'MULTICOBRE SULFATO DE COBRE PENTA F SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023215', item: '005', produto: 'MULTICOBRE 35 SULFATO DE COBRE MONO NA SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023216', item: '006', produto: 'MULTICOBRE 35 SULFATO DE COBRE MONO F SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023217', item: '007', produto: 'MULTIFER 19 SULFATO FERROSO HEPTA NA SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023218', item: '008', produto: 'MULTIFER 19 SULFATO FERROSO HEPTA F SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023219', item: '009', produto: 'MULTIFER 30 SULFATO FERROSO MONO NA SCS', quantidade: 100, data: '2025-07-01' },
  { id: '023220', item: '010', produto: 'MULTIFER 30 SULFATO FERROSO MONO F SCS', quantidade: 100, data: '2025-07-01' }
];
// Table 1: Embalagem e paletização
export const table1: TableItem[] = [
  { especificacao: 'Sacaria', complemento: '026127', id: 'emb-001', sourceTableIndex: 1 },
  { especificacao: 'Big Bags', complemento: 'Brancos', id: 'emb-002', sourceTableIndex: 1 },
  { especificacao: 'Big Bags', complemento: 'novos', id: 'emb-003', sourceTableIndex: 1 },
  { especificacao: 'Pallets', complemento: '1000kg', id: 'emb-004', sourceTableIndex: 1 },
  { especificacao: 'Pallets', complemento: '1200kg', id: 'emb-005', sourceTableIndex: 1 },
  { especificacao: 'Pallets', complemento: '1350kg', id: 'emb-006', sourceTableIndex: 1 },
  { especificacao: 'Pallets', complemento: '1375kg', id: 'emb-007', sourceTableIndex: 1 },
  { especificacao: 'Pallets', complemento: '1500kg', id: 'emb-008', sourceTableIndex: 1 },
  { especificacao: 'Envolver com stretch', complemento: 'Filme plástico', id: 'emb-009', sourceTableIndex: 1 },
  { especificacao: 'Inserir papelão', complemento: 'Embaixo dos pallets', id: 'emb-010', sourceTableIndex: 1 },
  { especificacao: 'Palletização específica', complemento: '48 sacos/pallet', id: 'emb-011', sourceTableIndex: 1 },
  { especificacao: 'Palletização específica', complemento: '56 sacos/pallet', id: 'emb-012', sourceTableIndex: 1 },
  { especificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-013', sourceTableIndex: 1 },
  { especificacao: 'Não sobrepor paletes', complemento: '', id: 'emb-014', sourceTableIndex: 1 },
  { especificacao: 'Pallets de madeira', complemento: 'Padrão, tratado, altura do calço', id: 'emb-015', sourceTableIndex: 1 },
  { especificacao: 'Um lote por pallet', complemento: '', id: 'emb-016', sourceTableIndex: 1 },
  { especificacao: 'Máximo de 2 ou 3 lotes', complemento: 'Por carga/embarque', id: 'emb-017', sourceTableIndex: 1 },
  { especificacao: 'Lote único para toda a carga', complemento: '', id: 'emb-018', sourceTableIndex: 1 },
  { especificacao: 'Não misturar lotes', complemento: 'No mesmo pallet', id: 'emb-019', sourceTableIndex: 1 },
  { especificacao: 'Validade mínima', complemento: '24 meses', id: 'emb-020', sourceTableIndex: 1 },
  { especificacao: 'Validade mínima', complemento: '1 ano', id: 'emb-021', sourceTableIndex: 1 },
  { especificacao: 'Validade mínima', complemento: '90 dias', id: 'emb-022', sourceTableIndex: 1 },
  { especificacao: 'Máximo de 4 sublotes', complemento: '', id: 'emb-023', sourceTableIndex: 1 }
];

// Table 2: Etiquetas e identificação
export const table2: TableItem[] = [
  { especificacao: 'Layout do cliente', complemento: '', id: 'etq-001', sourceTableIndex: 2 },
  { especificacao: 'lote obrigatório', complemento: ': ', id: 'etq-001', sourceTableIndex: 2 },
  { especificacao: 'Autocolante', complemento: '', id: 'etq-002', sourceTableIndex: 2 },
  { especificacao: 'Em espanhol', complemento: '', id: 'etq-003', sourceTableIndex: 2 },
  { especificacao: 'Branca pequena', complemento: '', id: 'etq-004', sourceTableIndex: 2 },
  { especificacao: 'Enviada por cliente', complemento: '', id: 'etq-005', sourceTableIndex: 2 },
  { especificacao: 'Grau técnico', complemento: '', id: 'etq-006', sourceTableIndex: 2 }
];

// Table 3: Químicos - geral
export const table3: TableItem[] = [
  { especificacao: 'Resíduo insolúvel máximo', complemento: '', id: '1-quimicosgeral', sourceTableIndex: 3 },
  { especificacao: 'solução incolor,', complemento: '', id: '2-quimicosgeral', sourceTableIndex: 3 },
  { especificacao: 'Solubilidade', complemento: '', id: '2-quimicosgeral', sourceTableIndex: 3 }
];

// Table 4: Químicos - por faixa
export const table4: TableItem[] = [
  { especificacao: 'Magnésio', complemento: '', min: 10, max: 20, unidade: '%', id: '1-quimicosfaixa', sourceTableIndex: 4 },
  { especificacao: 'Cobre', complemento: '', min: 21, max: 30, unidade: '%', id: '2-quimicosfaixa', sourceTableIndex: 4 },
  { especificacao: 'Mânganes', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', sourceTableIndex: 4 },
  { especificacao: 'Umidade', complemento: '', min: 5, max: 10, unidade: '%', id: '3-quimicosfaixa', sourceTableIndex: 4 },
  { especificacao: 'pH', complemento: '', min: 5, max: 10, unidade: 'pH', id: '3-quimicosfaixa', sourceTableIndex: 4 }
];

// Table 5: Logística e Transporte
export const table5: TableItem[] = [
  { especificacao: 'Horário de entrega ', complemento: 'Ex: 6h às 15h', id: 'log-001', sourceTableIndex: 5 },
  { especificacao: 'Não aceitar Bitrem ou Rodotrem', complemento: '', id: 'log-002', sourceTableIndex: 5 },
  { especificacao: 'Caminhão só com guarda baixa', complemento: '', id: 'log-003', sourceTableIndex: 5 },
  { especificacao: 'Não aceitar caminhão graneleiro grade alta', complemento: '', id: 'log-004', sourceTableIndex: 5 },
  { especificacao: 'Fotos obrigatórias', complemento: 'Carga, etiquetas, processo de carregamento, etc.', id: 'log-005', sourceTableIndex: 5 },
  { especificacao: 'Pallets devem ser posicionados', complemento: 'Acesso com transpaleteira elétrica', id: 'log-006', sourceTableIndex: 5 },
  { especificacao: 'Fotos da carga paletizada', complemento: 'Devem ser tiradas e enviadas na data do carregamento', id: 'log-007', sourceTableIndex: 5 }
];
