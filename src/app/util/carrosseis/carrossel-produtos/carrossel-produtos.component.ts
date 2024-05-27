import {Component, Input, OnInit} from '@angular/core';
import {CardProdutosComponent} from '../../cards/card-produtos/card-produtos.component';
import {CarouselModule} from "primeng/carousel";
import {NgFor, NgIf} from '@angular/common';
import {Produtos, ProdutosService} from '../../../services/produtos/produtos.service';

@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [
    CardProdutosComponent,
    NgIf,
    NgFor,
    CarouselModule
  ],
  templateUrl: './carrossel-produtos.component.html',
  styleUrl: './carrossel-produtos.component.css'
})
export class CarrosselProdutosComponent implements OnInit {

  @Input() produtos: Produtos[] = [];
  responsiveOptions: any[] | undefined;

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    if (!this.produtos || this.produtos.length === 0) {
      this.produtosService.getProdutos().subscribe(data => {
        this.produtos = data.result;
      });
    }
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
