import { Component, Input, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
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
    RouterOutlet,
    NgIf
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
    id: 0,
    nome: '',
    logo: ''
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
            nomeProduto: '',
            precoProduto: 0,
            mercado: [filtro.nome],
            categoria: []
          };
          this.produtosService.getProdutos(filtroCategoria).subscribe(
            produtos => this.produtosPorCategoria = produtos.result
          );
        }
      } else {
        let mercados: Mercados = {
          id: 0,
          nome: '',
          logo: ''
        };
        this.aplicarMercadoSelecionado(mercados);
      }
    });
  };

  aplicarMercadoSelecionado(mercado: Mercados) {
    this.mercado = mercado;
  };
}
