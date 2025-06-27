export class ModelEspecificacao {

    constructor(
        public id: string = '',
        public codEspecificacao: string = '',
        public descEspecificacao: string = '',
        public complemento: string = '',
        public min: number,
        public max: number,
        public unidade: string,
        public tipo: TipoEspecificacao = TipoEspecificacao.non, // must always define which table
        public codProduto?: string,
        public global: boolean = false,
        public seq: string = ''
    ) { }

    static fromJson(json: any): ModelEspecificacao {
        // Map string to enum value (case-insensitive, fallback to 'non')
        let tipo: TipoEspecificacao = TipoEspecificacao.non;
        if (typeof json.codGrupo === 'string') {
            const key = Object.keys(TipoEspecificacao).find(k => k.toLowerCase() === json.codGrupo.toLowerCase());
            if (key) {
                tipo = (TipoEspecificacao as any)[key];
            }
        }
        return new ModelEspecificacao(
            json.id,
            json.codEspecificacao,
            json.descEspecificacao,
            json.complemento,
            json.minimo,
            json.maximo,
            json.um,
            tipo,
            json.codProduto,
        );
    }
}

export enum TipoEspecificacao {
    non = 'Nenhum',
    emb = 'Embalagem',
    eti = 'Etiquetas',
    q01 = 'Químico - geral',
    q02 = 'Químico - especifico',
    log = 'Logística',
    // Adicione outros tipos conforme necessário
}


