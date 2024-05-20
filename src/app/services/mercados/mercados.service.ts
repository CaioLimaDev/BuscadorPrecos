import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Mercados{
  id: number;
  nome: string;
  logo: string;
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


}
