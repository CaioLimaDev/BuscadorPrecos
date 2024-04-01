import { Component } from '@angular/core';
import { MercadosService } from '../../services/mercados/mercados.service';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgFor
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  categorias = [{categoriaDescricao: String}];
  mercados = [{nomeMercado: String}];

  constructor(private mercadosService: MercadosService, private categoriasService: CategoriasService){
    this.categorias = this.categoriasService.getCategorias;
    this.mercados = this.mercadosService.getMercados;
  }

}
