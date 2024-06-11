import {Component, Inject, OnInit} from '@angular/core';
import {CardProdutosComponent} from '../../componentes/cards/card-produtos/card-produtos.component';
import {Produtos, ProdutosService} from '../../services/produtos/produtos.service';
import {SidebarComponent} from '../../componentes/sidebar/sidebar.component';
import {PaginationComponent} from '../../componentes/pagination/pagination/pagination.component';
import {CommonModule} from '@angular/common';
import {PaginationService} from '../../services/pagination/pagination.service';
import {DataViewModule} from 'primeng/dataview';
import {PropsService} from "../../services/props/props.service";
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    CardProdutosComponent,
    SidebarComponent,
    PaginationComponent,
    CommonModule,
    DataViewModule,
    SidebarModule,
    ButtonModule,
  ],
  templateUrl: './produtos-page.component.html',
  styleUrls: ['./produtos-page.component.css']
})
export class ProdutosPageComponent implements OnInit{
  cards: Produtos[] = [];
  layout: string = 'list';
  sidebarVisible: boolean = false;

  constructor(
    private produtosService: ProdutosService,
    private props: PropsService,
    @Inject(PaginationService) private paginationService: PaginationService
  ) {}

  ngOnInit() {
    this.props.propProdutoBuscado$.subscribe(produto => {
      if(produto){
        this.produtosService.getProdutos(produto).subscribe(
          produtos => {
            this.atualizarProdutos(produtos.result)
          }
        )
      }
    })
  }

  atualizarProdutos(produtos: Produtos[]) {
    this.cards = produtos;
  }
}
