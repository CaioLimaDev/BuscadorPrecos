import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MercadosService, Mercados } from '../../services/mercados/mercados.service';
import { CategoriasService, Categorias } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService, Produtos, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { HeaderComponent } from '../header/header.component';
import { PropsService } from '../../services/props/props.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    HeaderComponent
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  mercados: Mercados[] = [];
  produtos: Produtos[] = [];
  categorias: String[] = []

  inputNomeProduto = '';
  inputPrecoFiltro = 0;
  inputMercados: Mercados[] = [];
  inputCategorias: Categorias[] = []

  @Output() newFiltroAlterado = new EventEmitter<any>();

  constructor(
    private mercadosService: MercadosService,
    private produtosService: ProdutosService,
    private filtroService: PropsService
  ) {
    this.filtroService.propProdutoBuscado$.subscribe(filtro =>{
      if (filtro){
        this.newFiltroAlterado.emit(this.produtosService.getProdutos(filtro).subscribe(
          produtos => this.produtos = produtos.result,
        ))
      }
    })
    this.produtosService.getCategoriasProdutos().subscribe(categorias => this.categorias = categorias);
    this.mercadosService.getMercados().subscribe( mercados  => this.mercados = mercados.result );
  }

  getValoresCheckboxSelecionadosMercados(): any[]{
    return this.mercados.filter((e,i) => this.inputMercados[i])
  }

  getValoresCheckboxSelecionadosCategorias(): any[]{
    return this.categorias.filter((e,i) => this.inputCategorias[i]);
  }

  getMaiorPrecoPossivel(): number{
    return this.produtosService.valorMaximoProdutos()
  }

  getCardsFiltrados(produtosFiltroDTO: ProdutosFiltroDTO) {
    console.log(produtosFiltroDTO)
    return this.produtosService.getProdutos(produtosFiltroDTO)
  }

  enviarFiltroProdutos() {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeProduto: this.inputNomeProduto,
      precoProduto: this.inputPrecoFiltro,
      mercado: this.getValoresCheckboxSelecionadosMercados(),
      categoria: this.getValoresCheckboxSelecionadosCategorias()
    };

    this.newFiltroAlterado.emit(this.getCardsFiltrados(produtosFiltroDTO));
  }
}
