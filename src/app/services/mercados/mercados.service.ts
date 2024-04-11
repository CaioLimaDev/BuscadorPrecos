import { Injectable } from '@angular/core';

export interface Mercados{
  nomeMercado: string;
  logoMercado: string
}

@Injectable({
  providedIn: 'root'
})
export class MercadosService {

  private mercados: Mercados[] = [
    { nomeMercado: 'Bretas', logoMercado: 'assets/logos/Logotipo_do_Supermercado_Bretas.svg.png' },
    { nomeMercado: 'Carrefour', logoMercado: 'assets/logos/carrefour.svg' },
    { nomeMercado: 'Pão de Açúcar', logoMercado: 'assets/logos/Logomarca_do_Pão_de_Açúcar_(supermercado).png' },
    { nomeMercado: 'Hiper Moreira', logoMercado: 'assets/logos/hiper_moreira.png' },
    { nomeMercado: 'Atacadão', logoMercado: 'assets/logos/atacadao.png' }
  ]

  constructor() { }


  public get getMercados(): Mercados[] {
    return this.mercados
  }

}
