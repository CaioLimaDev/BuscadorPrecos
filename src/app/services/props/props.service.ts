import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produtos, ProdutosFiltroDTO } from '../produtos/produtos.service';
import { Categorias } from '../categorias/categorias.service';
import { Mercados } from '../mercados/mercados.service';

@Injectable({
  providedIn: 'root'
})
export class PropsService {
  private filtroMercado = new BehaviorSubject<Mercados | null>(null);
  filtroAtualMercado$ = this.filtroMercado.asObservable();

  atualizarMercadoDesejado(mercado: Mercados){
    let mercadoOutput: Mercados = {
      nomeMercado: mercado.nomeMercado,
      logoMercado: mercado.logoMercado      
    }
    this.filtroMercado.next(mercadoOutput)
  }
  
  private produtoProps = new BehaviorSubject<Produtos | null>(null);
  propAtualProduto$ = this.produtoProps.asObservable();

  atualizarProdutoDesejado(produto: Produtos){
    let produtoOutput: Produtos = {
      categoriaItem: produto.categoriaItem,
      imagemItem: produto.imagemItem,
      nomeItem: produto.nomeItem,
      nomeMercado: produto.nomeMercado,
      precoItem: produto.precoItem
    }
    this.produtoProps.next(produtoOutput)
  }

  private buscarProdutosProps = new BehaviorSubject<ProdutosFiltroDTO | null> (null);
  propProdutoBuscado$ = this.buscarProdutosProps.asObservable();

  atualizarProdutoBuscado(produtosFiltroDTO: ProdutosFiltroDTO ){
    let produtosFiltroOutput: ProdutosFiltroDTO = {
      catetegoriaItem: produtosFiltroDTO.catetegoriaItem,
      nomeItem: produtosFiltroDTO.nomeItem,
      nomeMercado: produtosFiltroDTO.nomeMercado,
      precoItem: produtosFiltroDTO.precoItem
    }
    console.log(produtosFiltroOutput)
    this.buscarProdutosProps.next(produtosFiltroOutput);
  }

  constructor() { }
}
