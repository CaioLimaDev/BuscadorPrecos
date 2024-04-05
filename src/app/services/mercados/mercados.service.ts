import { Injectable } from '@angular/core';

export interface Mercados{
  nomeMercado: string;
}

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  private mercados: Mercados[] = [
    { nomeMercado: 'Bretas' },
    { nomeMercado: 'Carrefour' },
    { nomeMercado: 'Pão de Açúcar' },
    { nomeMercado: 'Hiper Moreira' },
    { nomeMercado: 'Atacadão' }
  ]

  constructor() { }


  public get getMercados(): Mercados[] {
    return this.mercados
  }

}
