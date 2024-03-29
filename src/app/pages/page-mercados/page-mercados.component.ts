import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CarrosselProdutosComponent } from '../../util/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { CategoriasService } from '../../services/categorias/categorias.service';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-page-mercados',
  standalone: true,
  imports: [
    CarrosselProdutosComponent,
    NgFor,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './page-mercados.component.html',
  styleUrl: './page-mercados.component.css'
})
export class PageMercadosComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/200/200`);
  categorias: {categoriaDescricao: String}[];

  constructor(private categoriasService: CategoriasService) { 
    this.categorias = this.categoriasService.getCategorias;
  }   

}
