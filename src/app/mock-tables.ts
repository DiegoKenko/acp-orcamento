// mock-tables.ts
// Mock data for all tables in the ACP workflow UI, except ACPs
import { Table8Item, TableItem } from './app.component';

// Produtos table (Table 8)
export const produtos: Table8Item[] = [
  { id: '1', produto: 'Caixa de Papelão', quantidade: 100, data: '2025-07-01' },
  { id: '2', produto: 'Palete PBR', quantidade: 50, data: '2025-07-10' },
  { id: '3', produto: 'Saco Plástico', quantidade: 500, data: '2025-07-05' },
  { id: '4', produto: 'Fita PET', quantidade: 300, data: '2025-07-03' },
  { id: '5', produto: 'Filme Stretch', quantidade: 200, data: '2025-07-08' }
];

// Table 1: Embalagem e paletização
export const table1: TableItem[] = [
  { produto: 'Caixa de Papelão', especificacao: 'Caixa reforçada 60x40x40cm', complemento: 'Com impressão personalizada', id: '1-Caixa de Papelão' },
  { produto: 'Palete PBR', especificacao: 'Madeira tratada', complemento: '1m x 1,2m', id: '2-Palete PBR' },
  { produto: 'Saco Plástico', especificacao: 'Transparente 50L', complemento: 'Com lacre', id: '3-Saco Plástico' }
];

// Table 2: Químicos - por faixa
export const table2: TableItem[] = [
  { produto: 'Ácido Sulfúrico', especificacao: 'Faixa 1', complemento: '10-20%', min: 10, max: 20, unidade: 'L', id: '1-Ácido Sulfúrico' },
  { produto: 'Soda Cáustica', especificacao: 'Faixa 2', complemento: '21-30%', min: 21, max: 30, unidade: 'L', id: '2-Soda Cáustica' },
  { produto: 'Hipoclorito de Sódio', especificacao: 'Faixa 3', complemento: '5-10%', min: 5, max: 10, unidade: 'L', id: '3-Hipoclorito de Sódio' }
];

// Table 3: Matérias-primas
export const table3: TableItem[] = [
  { produto: 'Polietileno', especificacao: 'Alta densidade', complemento: 'Granulado', unidade: 'kg', id: '1-Polietileno' },
  { produto: 'Polipropileno', especificacao: 'Baixa densidade', complemento: 'Granulado', unidade: 'kg', id: '2-Polipropileno' }
];

// Table 4: Serviços
export const table4: TableItem[] = [
  { produto: 'Transporte', especificacao: 'Rodoviário', complemento: 'Caminhão fechado', unidade: 'viagem', id: '1-Transporte' },
  { produto: 'Paletização', especificacao: 'Manual', complemento: 'Equipe própria', unidade: 'hora', id: '2-Paletização' }
];

// Table 5: Componentes
export const table5: TableItem[] = [
  { produto: 'Válvula', especificacao: '1 polegada', complemento: 'Latão', unidade: 'un', id: '1-Válvula' },
  { produto: 'Mangueira', especificacao: '3 metros', complemento: 'PVC reforçado', unidade: 'un', id: '2-Mangueira' }
];

// Table 6: Peças
export const table6: TableItem[] = [
  { produto: 'Tampa', especificacao: 'Rosca 50mm', complemento: 'Com vedação', unidade: 'un', id: '1-Tampa' },
  { produto: 'Anel de Vedação', especificacao: 'Borracha NBR', complemento: 'Para tampa 50mm', unidade: 'un', id: '2-Anel de Vedação' }
];

