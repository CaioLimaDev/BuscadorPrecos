import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Mercados, MercadosService} from '../../services/mercados/mercados.service';
import {NgFor} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Produtos, ProdutosFiltroDTO, ProdutosService} from '../../services/produtos/produtos.service';
import {HeaderComponent} from '../header/header.component';
import {PropsService} from '../../services/props/props.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  mercados: Mercados[] = [];
  produtos: Produtos[] = [];
  categorias: string[] = [];

  inputNomeProduto = '';
  inputPrecoFiltro = 0;
  inputMercados: { [key: string]: boolean } = {};
  inputCategorias: { [key: string]: boolean } = {};

  @Output() newFiltroAlterado = new EventEmitter<Produtos[]>();

  ngOnInit() {
    this.enviarFiltroProdutos()
  }

  constructor(
    private mercadosService: MercadosService,
    private produtosService: ProdutosService,
    private filtroService: PropsService
  ) {

    this.produtosService.getCategoriasProdutos().subscribe(categorias => {
      this.categorias = categorias;
    });

    this.mercadosService.getMercados().subscribe(mercados => {
      this.mercados = mercados.result;
    });
  }

  getValoresCheckboxSelecionadosMercados(): any[] {
    return this.mercados.filter((e, i) => this.inputMercados[i]).map(
      mercado => mercado.nome
    )
  }

  getValoresCheckboxSelecionadosCategorias(): any[] {
    return this.categorias.filter((e, i) => this.inputCategorias[i]);
  }

  getMaiorPrecoPossivel(): number {
    return this.produtosService.valorMaximoProdutos();
  }

  enviarFiltroProdutos() {
    console.log(this.getValoresCheckboxSelecionadosCategorias())
    console.log(this.getValoresCheckboxSelecionadosMercados())
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeProduto: this.inputNomeProduto,
      precoProduto: this.inputPrecoFiltro,
      mercado: this.getValoresCheckboxSelecionadosMercados(),
      categoria: this.getValoresCheckboxSelecionadosCategorias()
    };

    console.log('Filtro enviado:', produtosFiltroDTO);
    this.produtosService.getProdutos(produtosFiltroDTO).subscribe(produtos => {
      this.produtos = produtos.result;
      console.log('Produtos obtidos:', this.produtos);
      this.newFiltroAlterado.emit(this.produtos);
    });
  }
}
