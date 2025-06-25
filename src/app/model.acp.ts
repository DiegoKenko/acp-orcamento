export class ModelEspecificacao {

    constructor(
        public id: string = '',
        public especificacao: string = '',
        public complemento: string = '',
        public min?: number,
        public max?: number,
        public unidade?: string,
        public tipo: TipoEspecificacao = TipoEspecificacao.none, // must always define which table
        public produto?: string,
        public global: boolean = false,
    ) { }

    static fromJson(json: any): ModelEspecificacao {
        return new ModelEspecificacao(
            json.id,
            json.nome,
            json.descricao,
            json.min,
            json.max,
            json.unidade,
            json.tipo ?? TipoEspecificacao.emba,
            json.produto,
            json.global ?? false
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

