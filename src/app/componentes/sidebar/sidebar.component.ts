import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mercados, MercadosService} from '../../services/mercados/mercados.service';
import {CommonModule, NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Produtos, ProdutosFiltroDTO, ProdutosService} from '../../services/produtos/produtos.service';
import {HeaderComponent} from '../header/header.component';
import {PaginationService} from '../../services/pagination/pagination.service';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    SidebarModule,
    HeaderComponent,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mercados: Mercados[] = [];
  produtos: Produtos[] = [];
  categorias: string[] = [];
  pageSize: number = 20;
  sidebarVisible: boolean = false;


  inputNomeProduto = '';
  inputPrecoFiltro = 0;
  inputMercados: { [key: string]: boolean } = {};
  inputCategorias: { [key: string]: boolean } = {};

  @Output() newFiltroAlterado = new EventEmitter<Produtos[]>();

  constructor(
    private mercadosService: MercadosService,
    private produtosService: ProdutosService,
    private paginationService: PaginationService
  ) {
    this.produtosService.getCategoriasProdutos().subscribe(categorias => {
      this.categorias = categorias;
    });

    this.mercadosService.getMercados().subscribe(mercados => {
      this.mercados = mercados.result;
    });

    this.paginationService.currentPage$.subscribe(page => {
      this.enviarFiltroProdutos(page);
    });
  }

  ngOnInit() {
    this.enviarFiltroProdutos();
  }

  getValoresCheckboxSelecionadosMercados(): any[] {
    return this.mercados.filter((e, i) => this.inputMercados[i]).map(
      mercado => mercado.nome
    );
  }

  getValoresCheckboxSelecionadosCategorias(): any[] {
    return this.categorias.filter((e, i) => this.inputCategorias[i]);
  }

  enviarFiltroProdutos(page: number = 0) {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeProduto: this.inputNomeProduto,
      precoProduto: this.inputPrecoFiltro,
      mercado: this.getValoresCheckboxSelecionadosMercados(),
      categoria: this.getValoresCheckboxSelecionadosCategorias(),
      page: page,
      pageSize: this.pageSize
    };

    this.produtosService.getProdutos(produtosFiltroDTO).subscribe(response => {
      this.produtos = response.result;
      this.paginationService.setTotalPages(Math.ceil(response.pageTotal / this.pageSize));
      this.newFiltroAlterado.emit(this.produtos);
    });
  }
}
