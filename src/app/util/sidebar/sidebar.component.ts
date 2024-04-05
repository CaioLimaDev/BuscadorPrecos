import { Component, Output, EventEmitter } from '@angular/core';
import { MercadosService } from '../../services/mercados/mercados.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService, Produtos } from '../../services/produtos/produtos.service';

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
  categorias = [{ categoriaDescricao: String }];
  mercados = [{ nomeMercado: String }];
  produtos: Produtos[];
  inputNomeProduto: string = ''
  @Output() newFiltroAlterado = new EventEmitter<string>();

  constructor(
    private mercadosService: MercadosService,
    private categoriasService: CategoriasService,
    private produtosService: ProdutosService
  ) {
    this.categorias = this.categoriasService.getCategorias;
    this.mercados = this.mercadosService.getMercados;
    this.produtos = this.produtosService.getProdutos;
  }

  enviarFiltroProdutos(filtroProdutos: string) {
    this.newFiltroAlterado.emit(filtroProdutos);
  }

}
