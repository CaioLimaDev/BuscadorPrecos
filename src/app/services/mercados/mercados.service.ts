import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Produtos} from "../produtos/produtos.service";

export interface Mercados{
  id: number;
  nome: string;
  logo: string;
}

export interface MercadoDTO{
  id: number;
  nome: string;
  logo: string;
  produtos: Produtos[]
}

@Injectable({
  providedIn: 'root'
})
export class MercadosService {
  urlBase = 'http://localhost:8080/api/mercados';
  private mercados: Mercados[] = []

  constructor(private http: HttpClient) { }

  getMercados(): Observable<any> {
    return this.http.get<any>(
      this.urlBase, {
        headers: {
          Accept: 'application/json'
        }
      }
    )
  }

  getMercadosPorId(id: number): Observable<MercadoDTO> {
    return this.http.get<MercadoDTO>(
      `${this.urlBase}/id/${id}`,
    );
  }


}
