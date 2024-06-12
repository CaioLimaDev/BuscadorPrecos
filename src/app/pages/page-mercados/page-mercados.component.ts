import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { CarrosselProdutosComponent } from '../../componentes/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Produtos, ProdutosService } from '../../services/produtos/produtos.service';
import { MercadoDTO } from '../../services/mercados/mercados.service';
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
  styleUrls: ['./page-mercados.component.css']
})
export class PageMercadosComponent implements OnInit {
  categorias: string[] = [];
  produtosPorCategoria: { [key: string]: Produtos[] } = {};

  mercado: MercadoDTO = {
    id: 0,
    nome: '',
    logo: '',
    produtos: []
  };

  constructor(
    private produtosService: ProdutosService,
    private filtroService: PropsService
  ) {
    this.produtosService.getCategoriasProdutos().subscribe(
      categorias => this.categorias = categorias
    );
  }

  ngOnInit() {
    this.filtroService.filtroAtualMercado$.subscribe(mercado => {
      if (mercado) {
        this.aplicarMercadoSelecionado(mercado);
        this.categorizarProdutos(mercado.produtos);
      }
    });
  }

  aplicarMercadoSelecionado(mercado: MercadoDTO) {
    this.mercado = mercado;
  }

  categorizarProdutos(produtos: Produtos[]) {
    this.produtosPorCategoria = {};
    produtos.forEach(produto => {
      if (!this.produtosPorCategoria[produto.categoria]) {
        this.produtosPorCategoria[produto.categoria] = [];
      }
      this.produtosPorCategoria[produto.categoria].push(produto);
    });
  }

  hasProducts(categoria: string): boolean {
    return this.produtosPorCategoria[categoria] && this.produtosPorCategoria[categoria].length > 0;
  }

  getProdutosPorCategoria(categoria: string): Produtos[] {
    return this.produtosPorCategoria[categoria] || [];
  }
}
