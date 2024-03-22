import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  

  constructor() { }
}

interface Produtos {
  nomeItem: String,
  nomeMercado: String,
  precoItem: Number,
}