import {Component, Input, OnInit} from '@angular/core';
import {CardProdutosComponent} from '../../cards/card-produtos/card-produtos.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgFor, NgIf} from '@angular/common';
import {Produtos, ProdutosService} from '../../../services/produtos/produtos.service';

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
export class CarrosselProdutosComponent implements OnInit {

  @Input() produtos: Produtos[] = [];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    if (!this.produtos || this.produtos.length === 0) {
      this.produtosService.getProdutos().subscribe(data => {
        this.produtos = data.result; console.log(data.url)
      });
    }
  }

  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 2
  };
}
