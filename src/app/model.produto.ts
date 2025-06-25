export class ModelProdutoItem {
    constructor(
        public codProduto: string = '',
        public seq: string = '',
        public nomeProduto: string = '',
        public descricao: string = '',
        public preco: number = 0.0,
        public dataEntrega: string = '',
        public quantidade: number = 1,
    ) { }

    static fromJson(json: any): ModelProdutoItem {
        return new ModelProdutoItem(
            json.codprd,
            json.item,
            json.produto,
            json.descricao,
            json.preco,
            json.dataEntrega,
            json.quantidade,
        );
    }
}

export interface ModelProdutoItemJson {
    id: string;
    item: string;
    produto: string;
    descricao: string;
    preco: number;
    dataEntrega: string;
    quantidade: number;
}