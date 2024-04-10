import { Component, Output, EventEmitter, Input } from '@angular/core';
import { MercadosService, Mercados } from '../../services/mercados/mercados.service';
import { CategoriasService, Categorias } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService, Produtos, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { HeaderComponent } from '../header/header.component';
import { FiltrosService } from '../../services/filtros/filtros.service';

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
  categorias: Categorias[];
  mercados: Mercados[];
  produtos: Produtos[];  

  inputNomeProduto = '';
  inputPrecoFiltro = 0;
  inputMercados: Mercados[] = [];
  inputCategorias: Categorias[] = []

  @Output() newFiltroAlterado = new EventEmitter<any>();
  
  constructor(
    private mercadosService: MercadosService,
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService,
    private filtroService: FiltrosService
  ) {
    this.filtroService.filtroAtual$.subscribe(filtro =>{
      if (filtro){      
        this.newFiltroAlterado.emit(this.produtosService.getProdutosFiltrosDTO(filtro))
      }
    })
    this.categorias = this.categoriasService.getCategorias;
    this.mercados = this.mercadosService.getMercados;
    this.produtos = this.produtosService.getProdutos;
  }
  
  getValoresCheckboxSelecionadosMercados(): any[]{
    return this.mercados.filter((e,i) => this.inputMercados[i])
  }

  getValoresCheckboxSelecionadosCategorias(): any[]{
    return this.categorias.filter((e,i) => this.inputCategorias[i]);
  }

  getCheckboxValue(){
    
  }
  getMaiorPrecoPossivel(): number{
    return this.produtosService.valorMaximoProdutos
  }

  getCardsFiltrados(produtosFiltroDTO: ProdutosFiltroDTO) {
    return this.produtosService.getProdutosFiltrosDTO(produtosFiltroDTO)
  }

  enviarFiltroProdutos() {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeItem: this.inputNomeProduto,
      precoItem: this.inputPrecoFiltro,
      nomeMercado: this.getValoresCheckboxSelecionadosMercados(),
      catetegoriaItem: this.getValoresCheckboxSelecionadosCategorias()
    };

    this.newFiltroAlterado.emit(this.getCardsFiltrados(produtosFiltroDTO));
  }
}
