import {Component} from '@angular/core';
import {CardMercadosComponent} from '../../cards/card-mercados/card-mercados.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgFor} from '@angular/common';
import {Mercados, MercadosService} from '../../../services/mercados/mercados.service';

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
  mercados: Mercados[] = []

  constructor(private mercadoService: MercadosService){
    this.mercadoService.getMercados().subscribe(
      mercados => this.mercados = mercados.result,
    )
  }

  slideConfig = { "slidesToShow": 4, "slidesToScroll": 2 };
}
