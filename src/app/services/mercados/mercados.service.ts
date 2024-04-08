import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MercadosService {
  private mercados = [
    { nomeMercado: 'Bretas' },
    { nomeMercado: 'Carrefour' },
    { nomeMercado: 'Pão de Açúcar' },
    { nomeMercado: 'Hiper Moreira' },
    { nomeMercado: 'Atacadão' }
  ]

  constructor() { }


  public get getMercados(): any {
    return this.mercados
  }

}
