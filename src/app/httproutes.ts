function getServerUrl(): string {
    return sessionStorage.getItem('environment') || 'http://10.2.1.198:8080';
}

export const HTTP_ROUTES = {
    produtos: (empresa: string, orcamento: string) => `${getServerUrl()}/rest/wsSZN/produtos?empresa=${empresa}&orcamento=${orcamento}`,
    especificacoes: () => `${getServerUrl()}/rest/wsACP/esptodas?empresa=01`,
    acpsPredefinidos: (orcamento: string, empresa: string) => `${getServerUrl()}/rest/wsACP/espPredef?empresa=${empresa}&orcamento=${orcamento}`
};

export class HttpJsonResponse<T = any> {
    constructor(
        public data: T | null = null,
        public status: number = 200,
        public message: string = '',
        public error: any = null
    ) {}

    get ok(): boolean {
        return this.status >= 200 && this.status < 300 && !this.error;
    }
}