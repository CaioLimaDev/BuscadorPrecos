import {Component} from '@angular/core';
import {CardMercadosComponent} from '../../cards/card-mercados/card-mercados.component';
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
  itemCount: number = 0;

  constructor(private mercadoService: MercadosService){
    this.mercadoService.getMercados().subscribe(
      mercados => {
        this.mercados = mercados.result;
        this.itemCount = this.mercados.length;
      },
    )
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 5,
        numScroll: 2
      },
      {
        breakpoint: '992px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '600px',
        numVisible: 1,
        numScroll: 1,
      }
    ];
  }

  protected readonly Math = Math;
}
