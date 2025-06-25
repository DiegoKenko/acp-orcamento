export class ModelEspecificacao {

    constructor(
        public id: string = '',
        public especificacao: string = '',
        public complemento: string = '',
        public min?: number,
        public max?: number,
        public unidade?: string,
        public tipo: TipoEspecificacao = TipoEspecificacao.none, // must always define which table
        public codProduto?: string,
        public nomeProduto?: string,
        public global: boolean = false,
        public seq: string = ''
    ) { }

    static fromJson(json: any): ModelEspecificacao {
        return new ModelEspecificacao(
            json.id,
            json.especificacao,
            json.descricao,
            json.min,
            json.max,
            json.unidade,
            json.tipo ?? TipoEspecificacao.none,
            json.produto,
            json.nomeProduto,
            json.global ?? false,
            json.seq ?? ''
        );
    }
}

export enum TipoEspecificacao {
    none = 'Nenhum',
    emba = 'Embalagem',
    etiq = 'Etiquetas',
    quig = 'Químico - geral',
    quie = 'Químico - especifico',
    logs = 'Logística',
    // Adicione outros tipos conforme necessário
}

