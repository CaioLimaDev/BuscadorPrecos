import { Component, Input } from '@angular/core';
import { CardMercadosComponent } from '../../cards/card-mercados/card-mercados.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-carrossel-mercados',
  standalone: true,
  imports: [
    CardMercadosComponent,
    SlickCarouselModule,
    NgFor
  ],
  templateUrl: './carrossel-mercados.component.html',
  styleUrl: './carrossel-mercados.component.css'
})
export class CarrosselMercadosComponent {
  
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

slideConfig = {"slidesToShow": 4, "slidesToScroll": 2};
}
