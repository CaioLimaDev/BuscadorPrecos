import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos = [
    { nomeItem: 'TremBao', nomeMercado: 'Atacadão', precoItem: 20 },
    { nomeItem: 'Trem melhor ainda', nomeMercado: 'Pão de Açucar', precoItem: 30 },
    { nomeItem: 'bla bla bla', nomeMercado: 'Hiper Moreira', precoItem: 10 },
    { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
    { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
    { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
    { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
    { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 }
  ]

  constructor() { }
    
  public get getProdutos() : any {
    return this.produtos;
  }
  
}
