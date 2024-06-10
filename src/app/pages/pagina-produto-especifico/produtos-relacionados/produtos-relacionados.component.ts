import {Component, Input, OnChanges} from '@angular/core';
import {
  CardProdutosHorizontalComponent
} from '../../../componentes/cards/card-produtos-horizontal/card-produtos-horizontal.component';
import {Produtos} from '../../../services/produtos/produtos.service';
import {CommonModule, NgFor} from '@angular/common';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-produtos-relacionados',
  standalone: true,
  imports: [
    CardProdutosHorizontalComponent,
    NgFor,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './produtos-relacionados.component.html',
  styleUrl: './produtos-relacionados.component.css'
})
export class ProdutosRelacionadosComponent implements OnChanges{
  @Input() produtos: Produtos[] = [];
  displayedProdutos: Produtos[] = [];
  currentIndex: number = 0;
  increment: number = 3;
  showMoreButton: boolean = false;

  ngOnChanges() {
    this.currentIndex = 0;
    this.displayedProdutos = [];
    this.verMais();
  }

  verMais() {
    const nextIndex = this.currentIndex + this.increment;
    this.displayedProdutos = this.displayedProdutos.concat(this.produtos.slice(this.currentIndex, nextIndex));
    this.currentIndex = nextIndex;
    this.showMoreButton = this.currentIndex < this.produtos.length;
  }
}
