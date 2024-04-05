import { Component } from '@angular/core';
import { CardMercadosComponent } from '../../cards/card-mercados/card-mercados.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgFor } from '@angular/common';
import { MercadosService, Mercados } from '../../../services/mercados/mercados.service';

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
  mercados: Mercados[]

  constructor(private mercadoService: MercadosService){
    this.mercados = this.mercadoService.getMercados
  }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 2 };
}
