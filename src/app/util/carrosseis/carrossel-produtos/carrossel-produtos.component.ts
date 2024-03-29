import { Component } from '@angular/core';
import { CardProdutosComponent } from '../../cards/card-produtos/card-produtos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIf,NgFor } from '@angular/common';
import { ProdutosService } from '../../../services/produtos/produtos.service';

@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [
    CardProdutosComponent,
    NgIf,
    NgFor,
    SlickCarouselModule
  ],
  templateUrl: './carrossel-produtos.component.html',
  styleUrl: './carrossel-produtos.component.css'
})
export class CarrosselProdutosComponent {
  
  cards = [{nomeItem: String, nomeMercado: String, precoItem: Number}]

  constructor(private produtosService: ProdutosService){
    this.cards = this.produtosService.getProdutos
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
  };
}
