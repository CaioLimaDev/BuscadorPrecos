import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { Produtos, ProdutosService, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { SidebarComponent } from '../../util/sidebar/sidebar.component';
import { PaginationComponent } from '../../util/pagination/pagination/pagination.component';
import { CommonModule } from '@angular/common';
import { FiltrosService } from '../../services/filtros/filtros.service';

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

  constructor(private produtosService: ProdutosService, private filtroService: FiltrosService){}

  ngOnInit() {
    this.filtroService.filtroAtual$.subscribe(filtro => {
      if (filtro) {        
        this.aplicarFiltroProdutos(this.produtosService.getProdutosFiltrosDTO(filtro));
      } else {        
        let produtosFiltroDTO: ProdutosFiltroDTO = {
          nomeItem: '',
          nomeMercado: [],
          precoItem: 0,
          catetegoriaItem: [],
        };
        this.aplicarFiltroProdutos(this.produtosService.getProdutosFiltrosDTO(produtosFiltroDTO));
      }
    });
  }

  aplicarFiltroProdutos(produtosFiltrados: Produtos[]){
    this.cards = produtosFiltrados;
  }
}