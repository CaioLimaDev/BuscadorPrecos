import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarrosselProdutosComponent } from '../../util/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { Categorias, CategoriasService } from '../../services/categorias/categorias.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Produtos, ProdutosFiltroDTO, ProdutosService } from '../../services/produtos/produtos.service';
import { Mercados } from '../../services/mercados/mercados.service';
import { PropsService } from '../../services/props/props.service';

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

  mercado: Mercados = {
    nomeMercado: '',
    logoMercado: ''
  };

  constructor(
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService,
    private filtroService: PropsService
  ) {
    this.categorias = this.categoriasService.getCategorias;
  }

  ngOnInit() {
    let filtro;
    this.filtroService.filtroAtualMercado$.subscribe(f => {
      filtro = f;
      if (filtro) {
        this.aplicarMercadoSelecionado(filtro);
        for (let categoria of this.categorias) {
          let filtroCategoria: ProdutosFiltroDTO = {
            nomeItem: '',
            precoItem: 0,
            nomeMercado: [filtro],
            catetegoriaItem: [categoria]
          };
          console.log(this.produtosPorCategoria[categoria.categoriaDescricao] = this.produtosService.getProdutosFiltrosDTO(filtroCategoria))
          this.produtosPorCategoria[categoria.categoriaDescricao] = this.produtosService.getProdutosFiltrosDTO(filtroCategoria);
        }
      } else {
        let mercados: Mercados = {
          nomeMercado: '',
          logoMercado: ''
        };
        this.aplicarMercadoSelecionado(mercados);
      }
    });
  };

  aplicarMercadoSelecionado(mercado: Mercados) {
    this.mercado = mercado;
  };

  getCardsFiltrados(protutosFiltradosDTO: ProdutosFiltroDTO) {
    return this.produtosService.getProdutosFiltrosDTO(protutosFiltradosDTO);
  };
}
