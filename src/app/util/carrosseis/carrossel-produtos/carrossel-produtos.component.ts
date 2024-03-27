import { Component } from '@angular/core';
import { CardProdutosComponent } from '../../cards/card-produtos/card-produtos.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIf,NgFor } from '@angular/common';


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
  
  cards = [
      {nomeItem: 'bla', nomeMercado: 'Atacadão', precoItem: 20 },
      { nomeItem: 'bla bla', nomeMercado: 'Pão de Açucar', precoItem: 30 },
      { nomeItem: 'bla bla bla', nomeMercado: 'Hiper Moreira', precoItem: 10 },
      { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
      { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
      { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
      { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 },
      { nomeItem: 'bla bla bla bla', nomeMercado: 'Bretas', precoItem: 20 }
    ]

  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1};
}
