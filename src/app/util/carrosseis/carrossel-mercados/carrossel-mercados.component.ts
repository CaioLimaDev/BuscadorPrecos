import {Component} from '@angular/core';
import {CardMercadosComponent} from '../../cards/card-mercados/card-mercados.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {NgFor} from '@angular/common';
import {Mercados, MercadosService} from '../../../services/mercados/mercados.service';
import {CardProdutosComponent} from "../../cards/card-produtos/card-produtos.component";
import {CarouselModule} from "primeng/carousel";
import {SharedModule} from "primeng/api";

@Component({
  selector: 'app-carrossel-mercados',
  standalone: true,
  imports: [
    CardMercadosComponent,
    SlickCarouselModule,
    NgFor,
    CardProdutosComponent,
    CarouselModule,
    SharedModule
  ],
  templateUrl: './carrossel-mercados.component.html',
  styleUrl: './carrossel-mercados.component.css'
})
export class CarrosselMercadosComponent {

  mercados: Mercados[] = []
  responsiveOptions: any[] | undefined;

  constructor(private mercadoService: MercadosService){
    this.mercadoService.getMercados().subscribe(
      mercados => this.mercados = mercados.result,
    )
    this.responsiveOptions = [
      {
        breakpoint: '96em',
        numVisible: 5,
        numScroll: 2
      },
      {
        breakpoint: '62em',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '48em',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '30em',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
