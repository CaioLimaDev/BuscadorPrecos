import { Component, OnInit } from '@angular/core';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { Produtos, ProdutosService, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { SidebarComponent } from '../../util/sidebar/sidebar.component';
import { PaginationComponent } from '../../util/pagination/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { PropsService } from '../../services/props/props.service';

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    CardProdutosComponent,
    SidebarComponent,
    PaginationComponent,
    CommonModule,
  ],
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.css']
})
export class ProdutosPageComponent implements OnInit {
  cards: Produtos[] = [];
  filtroPadrao: ProdutosFiltroDTO = {
    nomeProduto: '',
    precoProduto: 0,
    mercado: [],
    categoria: [],
  };

  constructor(
    private produtosService: ProdutosService,
    private filtroService: PropsService
  ) {}

  ngOnInit() {
    this.filtroService.propProdutoBuscado$.subscribe(filtro => {
      this.atualizarProdutos(filtro);
    });
  }

  atualizarProdutos(filtro: ProdutosFiltroDTO | null) {
    const filtroAtual: ProdutosFiltroDTO = filtro || this.filtroPadrao;
    this.produtosService.getProdutos(filtroAtual).subscribe(
      produtos => {
        this.cards = produtos.result;
      },
      error => {
        console.log('Ocorreu um erro ao buscar os produtos:', error);
      }
    );
  }
}
