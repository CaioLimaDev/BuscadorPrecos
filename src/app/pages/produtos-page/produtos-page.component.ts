import {Component, Inject} from '@angular/core';
import {CardProdutosComponent} from '../../componentes/cards/card-produtos/card-produtos.component';
import {Produtos, ProdutosService} from '../../services/produtos/produtos.service';
import {SidebarComponent} from '../../componentes/sidebar/sidebar.component';
import {PaginationComponent} from '../../componentes/pagination/pagination/pagination.component';
import {CommonModule} from '@angular/common';
import {PaginationService} from '../../services/pagination/pagination.service';
import {DataViewModule} from 'primeng/dataview';

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    CardProdutosComponent,
    SidebarComponent,
    PaginationComponent,
    CommonModule,
    DataViewModule
  ],
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.css']
})
export class ProdutosPageComponent {
  cards: Produtos[] = [];
  layout: string = 'list';

  constructor(
    private produtosService: ProdutosService,
    @Inject(PaginationService) private paginationService: PaginationService
  ) {}

  atualizarProdutos(produtos: Produtos[]) {
    this.cards = produtos;
  }
}
