import { Component, OnInit } from '@angular/core';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { Produtos, ProdutosService, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { SidebarComponent } from '../../util/sidebar/sidebar.component';
import { PaginationComponent } from '../../util/pagination/pagination/pagination.component';
import { CommonModule } from '@angular/common';

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
export class ProdutosPageComponent {
  cards: Produtos[] = [];

  constructor(
    private produtosService: ProdutosService,
  ) {}

  atualizarProdutos(produtos: Produtos[]) {
    this.cards = produtos;
  }
}
