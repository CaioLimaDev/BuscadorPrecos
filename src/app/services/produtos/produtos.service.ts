import { Injectable } from '@angular/core';
import { Categorias } from '../categorias/categorias.service';
import { Mercados } from '../mercados/mercados.service';

export interface Produtos {
  nomeItem: String;
  nomeMercado: Mercados;
  precoItem: Number;
  categoriaItem: Categorias;
}

export interface ProdutosFiltroDTO {
  nomeItem: string,
  nomeMercado: Mercados[],
  catetegoriaItem: Categorias[]
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produtos[] = [
    { nomeItem: 'TremBao', nomeMercado: { nomeMercado: 'Atacadão' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'Trem melhor ainda', nomeMercado: { nomeMercado: 'Pão de Açucar' }, precoItem: 30, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla', nomeMercado: { nomeMercado: 'Hiper Moreira' }, precoItem: 10, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla bla', nomeMercado: { nomeMercado: 'Bretas' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla bla', nomeMercado: { nomeMercado: 'Bretas' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla bla', nomeMercado: { nomeMercado: 'Bretas' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla bla', nomeMercado: { nomeMercado: 'Bretas' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } },
    { nomeItem: 'bla bla bla bla', nomeMercado: { nomeMercado: 'Bretas' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Ortifruti' } }
  ]

  constructor() { }

  public get getProdutos(): any[] {
    return this.produtos;
  }

  getProdutosFiltrosDTO(produtosFiltroDTO: ProdutosFiltroDTO): Produtos[] {
    if (!produtosFiltroDTO) {
      return this.produtos;
    }
  
    let produtosFiltrados: Produtos[] = this.produtos;
  
    if (produtosFiltroDTO.nomeItem) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.nomeItem.toLowerCase().includes(produtosFiltroDTO.nomeItem.toLowerCase())
      );
    }
  
    if (produtosFiltroDTO.nomeMercado && produtosFiltroDTO.nomeMercado.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produtosFiltroDTO.nomeMercado.some(mercado => 
          produto.nomeMercado.nomeMercado.toLowerCase().includes(mercado.nomeMercado.toLowerCase())
        )
      );
    }
    
    if (produtosFiltroDTO.catetegoriaItem && produtosFiltroDTO.catetegoriaItem.length > 0) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produtosFiltroDTO.catetegoriaItem.some(categoria => 
          produto.categoriaItem.categoriaDescricao.toLowerCase().includes(categoria.categoriaDescricao.toLowerCase())
        )
      );
    }
    

  
    if (!produtosFiltroDTO.nomeItem && !produtosFiltroDTO.nomeMercado) {
      return this.produtos;
    }
    return produtosFiltrados;
  }
  
}
