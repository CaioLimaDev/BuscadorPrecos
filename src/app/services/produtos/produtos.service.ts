import { Injectable } from '@angular/core';
import { Categorias } from '../categorias/categorias.service';
import { Mercados } from '../mercados/mercados.service';

export interface Produtos {
  nomeItem: string;
  nomeMercado: Mercados;
  precoItem: number;
  categoriaItem: Categorias;
  imagemItem: string;  
}

export interface ProdutosFiltroDTO {
  nomeItem: string,
  precoItem: number,
  nomeMercado: Mercados[],
  catetegoriaItem: Categorias[]
}

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private produtos: Produtos[] = [
    { nomeItem: 'Batata Inglesa', nomeMercado: { nomeMercado: 'Atacadão', logoMercado: ' ' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/batataInglesa.png' },
    { nomeItem: 'Atacadão Tomate Saladete', nomeMercado: { nomeMercado: 'Pão de Açucar', logoMercado: ' ' }, precoItem: 30, categoriaItem: { categoriaDescricao: 'Destilados' }, imagemItem: '/assets/produtos/tomateSaladete.png' },
    { nomeItem: 'Wickbold Pão do Forno 60% Integral', nomeMercado: { nomeMercado: 'Hiper Moreira', logoMercado: ' ' }, precoItem: 10, categoriaItem: { categoriaDescricao: 'Padaria e Confeitaria' }, imagemItem: '/assets/produtos/paoWickbold.png' },
    { nomeItem: 'Veja Limpador Multiuso Gold Original', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Limpeza' }, imagemItem: '/assets/produtos/veja.png' },
    { nomeItem: 'Maçã Fuji', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/macaFuji.png' },
    { nomeItem: 'Mamão Formosa', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 100, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/mamaoFormosa.png' },
    { nomeItem: 'Jaguacy Abacate Avocado Baby', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/abacateBaby.png' },
    { nomeItem: 'Uva Red Globe', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 20, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/uvaRedGlobe.png' },
    // Produtos adicionais para Atacadão
    { nomeItem: 'Arroz Integral', nomeMercado: { nomeMercado: 'Atacadão', logoMercado: ' ' }, precoItem: 15, categoriaItem: { categoriaDescricao: 'Padaria e Confeitaria' }, imagemItem: '/assets/produtos/arrozIntegral.png' },
    { nomeItem: 'Feijão Preto', nomeMercado: { nomeMercado: 'Atacadão', logoMercado: ' ' }, precoItem: 10, categoriaItem: { categoriaDescricao: 'Padaria e Confeitaria' }, imagemItem: '/assets/produtos/feijaoPreto.png' },
    { nomeItem: 'Macarrão Espaguete', nomeMercado: { nomeMercado: 'Atacadão', logoMercado: ' ' }, precoItem: 8, categoriaItem: { categoriaDescricao: 'Padaria e Confeitaria' }, imagemItem: '/assets/produtos/macarraoEspaguete.png' },
    // Produtos adicionais para Pão de Açúcar
    { nomeItem: 'Vinho Tinto', nomeMercado: { nomeMercado: 'Pão de Açucar', logoMercado: ' ' }, precoItem: 50, categoriaItem: { categoriaDescricao: 'Limpeza' }, imagemItem: '/assets/produtos/vinhoTinto.png' },
    { nomeItem: 'Queijo Gouda', nomeMercado: { nomeMercado: 'Pão de Açucar', logoMercado: ' ' }, precoItem: 25, categoriaItem: { categoriaDescricao: 'Limpeza' }, imagemItem: '/assets/produtos/queijoGouda.png' },
    { nomeItem: 'Presunto Parma', nomeMercado: { nomeMercado: 'Pão de Açucar', logoMercado: ' ' }, precoItem: 35, categoriaItem: { categoriaDescricao: 'Limpeza' }, imagemItem: '/assets/produtos/presuntoParma.png' },
    // Produtos adicionais para Hiper Moreira
    { nomeItem: 'Leite Integral', nomeMercado: { nomeMercado: 'Hiper Moreira', logoMercado: ' ' }, precoItem: 5, categoriaItem: { categoriaDescricao: 'Destilados' }, imagemItem: '/assets/produtos/leiteIntegral.png' },
    { nomeItem: 'Iogurte Natural', nomeMercado: { nomeMercado: 'Hiper Moreira', logoMercado: ' ' }, precoItem: 3, categoriaItem: { categoriaDescricao: 'Destilados' }, imagemItem: '/assets/produtos/requeijao.png' },
    { nomeItem: 'Queijo Minas Frescal', nomeMercado: { nomeMercado: 'Hiper Moreira', logoMercado: ' ' }, precoItem: 12, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/queijoMinas.png' },
    // Produtos adicionais para Bretas
    { nomeItem: 'Água Mineral', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 2, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/agua.png' },
    { nomeItem: 'Papel Higiênico', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 8, categoriaItem: { categoriaDescricao: 'Destilados' }, imagemItem: '/assets/produtos/papel.png' },
    { nomeItem: 'Detergente Líquido', nomeMercado: { nomeMercado: 'Bretas', logoMercado: ' ' }, precoItem: 6, categoriaItem: { categoriaDescricao: 'Hortifruti' }, imagemItem: '/assets/produtos/detergente.png' },
];



  constructor() { }

  public get getProdutos(): any[] {
    return this.produtos;
  }

  public get valorMaximoProdutos(): number {
    let maxPreco = Math.max(...this.produtos.map(produto => produto.precoItem));
    return maxPreco
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

    if (produtosFiltroDTO.precoItem != 0) {
      produtosFiltrados = produtosFiltrados.filter(produto =>
        produto.precoItem <= produtosFiltroDTO.precoItem
      )
    }


    if (!produtosFiltroDTO.nomeItem && !produtosFiltroDTO.nomeMercado) {
      return this.produtos;
    }
    return produtosFiltrados;
  }

}
