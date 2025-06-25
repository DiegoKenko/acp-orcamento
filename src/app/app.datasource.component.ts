import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AUTH_HEADER } from './auth';
import { HTTP_ROUTES, HttpJsonResponse } from './httproutes';
import { ModelProdutoItem } from './model.produto';
import { ModelEspecificacao } from './model.acp';

@Injectable({ providedIn: 'root' })
export class AppDatasourceComponent {
    private authHeader = new HttpHeaders(AUTH_HEADER);

    constructor(private http: HttpClient) { }

    fetchProdutos(empresa: string, orcamento: string): Observable<HttpJsonResponse<ModelProdutoItem[]>> {
        const url = HTTP_ROUTES.produtos(empresa, orcamento);
        return this.http.get<HttpJsonResponse<ModelProdutoItem[]>>(url, { headers: this.authHeader });
    }

    fetchEspecificacoes(): Observable<HttpJsonResponse<ModelEspecificacao[]>> {
        const url = HTTP_ROUTES.especificacoes();
        return this.http.get<HttpJsonResponse<ModelEspecificacao[]>>(url, { headers: this.authHeader });
    }

    fetchAcpsPredefinidos(orcamento: string, empresa: string): Observable<HttpJsonResponse<ModelEspecificacao[]>> {
        const url = HTTP_ROUTES.acpsPredefinidos(orcamento, empresa);
        return this.http.get<HttpJsonResponse<ModelEspecificacao[]>>(url, { headers: this.authHeader });
    }
}
