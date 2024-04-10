import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Mercados, MercadosService } from '../../services/mercados/mercados.service';
import { Categorias, CategoriasService } from '../../services/categorias/categorias.service';
import { ProdutosFiltroDTO } from '../../services/produtos/produtos.service';
import { FormsModule } from '@angular/forms';
import { FiltrosService } from '../../services/filtros/filtros.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mercados: Mercados[];
  categorias: Categorias[];

  constructor(
    private mercadosService: MercadosService,
    private categoriasService: CategoriasService,
    private router: Router,
    private filtroService: FiltrosService
  ) {
    this.mercados = this.mercadosService.getMercados;
    this.categorias = this.categoriasService.getCategorias
  }

  alterarFiltro(filtro: Categorias[]){
    this.filtroService.atualizarFiltroCategoria(filtro)
    console.log(filtro)
    this.router.navigate(['/produtos-page'])  
  }

  isDropdownOpen: number = 0;

  openDropdown(index: number) {
    this.isDropdownOpen = index;
  }

  closeDropdown(index: number) {
    this.isDropdownOpen = 0;
  }

  irParaMercado(){
    this.router.navigate(['/mercados-page'])
  }
  irParaProdutos(){
    this.router.navigate(['/produtos-page'])  
  }
}
