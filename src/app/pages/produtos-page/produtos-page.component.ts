import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { ProdutosService } from '../../services/produtos/produtos.service';
import { SidebarComponent } from '../../util/sidebar/sidebar.component';
import { PaginationComponent } from '../../util/pagination/pagination/pagination.component';

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    NgFor,
    CardProdutosComponent,
    SidebarComponent,
    PaginationComponent
  ],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.css'
})
export class ProdutosPageComponent {
  cards = [{nomeItem: String, nomeMercado: String, precoItem: Number}]

  constructor(private produtosService: ProdutosService){
    this.cards = this.produtosService.getProdutos
  }
}
