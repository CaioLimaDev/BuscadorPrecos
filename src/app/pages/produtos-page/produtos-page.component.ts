import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { ProdutosService, Produtos } from '../../services/produtos/produtos.service';
import { SidebarComponent } from '../../util/sidebar/sidebar.component';
import { PaginationComponent } from '../../util/pagination/pagination/pagination.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    NgFor,
    CardProdutosComponent,
    SidebarComponent,
    PaginationComponent,
    CommonModule,
    
  ],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.css'
})
export class ProdutosPageComponent {
  cards: Produtos[];
  filtroProdutos: string = '';

  constructor(private produtosService: ProdutosService){
    this.cards = this.produtosService.getProdutos
  }

  aplicarFiltroProdutos(filtro: string){
    this.filtroProdutos = filtro;
    console.log(this.filtroProdutos)
  }
}
