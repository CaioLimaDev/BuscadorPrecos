import { Component, Output, EventEmitter } from '@angular/core';
import { MercadosService, Mercados } from '../../services/mercados/mercados.service';
import { CategoriasService, Categorias } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService, Produtos, ProdutosFiltroDTO } from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor,
    FormsModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  categorias: Categorias[];
  mercados: Mercados[];
  produtos: Produtos[];

  inputNomeProduto = '';
  inputMercados = '';
  inputCategorias = '';
  
  @Output() newFiltroAlterado = new EventEmitter<any>();

  constructor(
    private mercadosService: MercadosService,
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService
  ) {
    this.categorias = this.categoriasService.getCategorias;
    this.mercados = this.mercadosService.getMercados;
    this.produtos = this.produtosService.getProdutos;
  }

  getCardsFiltrados(produtosFiltroDTO: ProdutosFiltroDTO) {
    return this.categoriasService.getCategorias(produtosFiltroDTO)
  }
  enviarFiltroProdutos() {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeItem: this.inputNomeProduto,
      nomeMercado: this.inputMercados,
      catetegoriaItem: this.inputCategorias
    };

    this.newFiltroAlterado.emit(this.getCardsFiltrados(produtosFiltroDTO));
  }


}
