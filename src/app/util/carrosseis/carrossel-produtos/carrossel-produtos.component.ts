import { Component, Input, OnInit } from '@angular/core';
import { CardProdutosComponent } from '../../cards/card-produtos/card-produtos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIf,NgFor } from '@angular/common';
import { Produtos, ProdutosService } from '../../../services/produtos/produtos.service';

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
export class CarrosselProdutosComponent implements OnInit{
  
  @Input() produtos: Produtos[] = [] 

  constructor(private produtosService: ProdutosService){}

  ngOnInit(): void {
    if(this.produtos.length === 0){
      this.produtos = this.produtosService.getProdutos
    }
  }
  slideConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 2,
  };
}
