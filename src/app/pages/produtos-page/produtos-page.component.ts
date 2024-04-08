import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { Produtos, ProdutosService, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
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
export class ProdutosPageComponent implements OnInit {
  cards: Produtos[] = [];  

  constructor(private produtosService: ProdutosService){}

  ngOnInit() {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeItem: '',
      nomeMercado: [],
      catetegoriaItem: [],
    };
  
    this.aplicarFiltroProdutos(this.produtosService.getProdutosFiltrosDTO(produtosFiltroDTO));
  }

  aplicarFiltroProdutos(produtosFiltrados: Produtos[]){
    this.cards = produtosFiltrados;
  }
}