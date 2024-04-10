import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarrosselProdutosComponent } from '../../util/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { Categorias, CategoriasService } from '../../services/categorias/categorias.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Produtos, ProdutosFiltroDTO, ProdutosService } from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-page-mercados',
  standalone: true,
  imports: [
    CarrosselProdutosComponent,
    NgFor,
    RouterLink,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './page-mercados.component.html',
  styleUrl: './page-mercados.component.css'
})
export class PageMercadosComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/200/200`);
  categorias: Categorias[];
  cards: Produtos[] = [];
  produtosPorCategoria: { [key: string]: Produtos[] } = {}

  constructor(
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService
  ) {
    this.categorias = this.categoriasService.getCategorias;
  }

  ngOnInit() {
    for (let categoria of this.categorias) {
      let filtro: ProdutosFiltroDTO = {
        nomeItem: '',
        precoItem: 0,
        nomeMercado: [],
        catetegoriaItem: [categoria]
      };
      this.produtosPorCategoria[categoria.categoriaDescricao] = this.produtosService.getProdutosFiltrosDTO(filtro);
    }
  }
  getCardsFiltrados(protutosFiltradosDTO: ProdutosFiltroDTO) {
    return this.produtosService.getProdutosFiltrosDTO(protutosFiltradosDTO)
  }
}
