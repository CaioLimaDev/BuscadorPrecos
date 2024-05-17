import { Injectable } from '@angular/core';
import { Mercados } from '../mercados/mercados.service';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Produtos {
  id: number;
  nomeProduto: string;
  mercado: Mercados;
  precoProduto: number;
  unidadeMedida: string;
  categoria: string;
  imagem: string;
}

export interface ProdutosFiltroDTO {
  nomeProduto: string,
  precoProduto: number,
  mercado: Mercados[],
  categoria: string[]
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  urlBase = 'http://localhost:8080/api/produtos';
  private produtos: Produtos[] = [];

  constructor(private http: HttpClient) { }

  getProdutos(filtro?: ProdutosFiltroDTO): Observable<any> {
    let params = new HttpParams();

    if (filtro) {
      if (filtro.nomeProduto) {
        params = params.set('nomeProduto', filtro.nomeProduto);
      }
      if (filtro.precoProduto) {
        params = params.set('precoProduto', filtro.precoProduto.toString());
      }
      if (filtro.mercado) {
        filtro.mercado.forEach(mercado => {
          params = params.append('mercado', mercado.toString());
        });
      }
      if (filtro.categoria) {
        filtro.categoria.forEach(categoria => {
          params = params.append('categoria', categoria);
        });
      }
    }
    return this.http.get<any>(
      this.urlBase,
      {
        headers: {
          Accept: 'application/json'
        },
        params: params
      },
    );
  }

  valorMaximoProdutos(): number {
    return Math.max(...this.produtos.map(produto => produto.precoProduto));
  }

  getCategoriasProdutos(): Observable<any> {
    return this.http.get<any>(
      this.urlBase + '/categorias',
      {
        headers: {
          Accept: 'application/json'
        }
      },
    );
  }

  getProdutosPorId(id: number): Observable<any> {
    return this.http.get<any>(
      this.urlBase + '/id/' + id,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    )
  }

}
