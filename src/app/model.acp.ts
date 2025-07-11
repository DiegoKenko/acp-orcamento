export class ModelEspecificacao {

    constructor(
        public id: string = '',
        public codEspecificacao: string = '',
        public descEspecificacao: string = '',
        public complemento: string = '',
        public min: number = 0,
        public max: number = 0,
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
            let grupo = json.codGrupo.toLowerCase() || json.grupo.toLowerCase() || '';
            const key = Object.keys(TipoEspecificacao).find(k => k.toLowerCase() === grupo);
            if (key) {
                tipo = (TipoEspecificacao as any)[key];
            }
        }
        return new ModelEspecificacao(
            json.id,
            json.codEspecificacao || json.especificacao,
            json.descEspecificacao ,
            json.complemento,
            json.minimo || json.min,
            json.maximo || json.max,
            json.um,
            tipo,
            json.codProduto || json.produto || '',
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


