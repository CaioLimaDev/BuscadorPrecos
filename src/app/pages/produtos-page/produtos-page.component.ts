import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardProdutosComponent } from '../../util/cards/card-produtos/card-produtos.component';
import { ProdutosService } from '../../services/produtos/produtos.service';
@Component({
  selector: 'app-produtos-page',
  standalone: true,
  imports: [
    NgFor,
    CardProdutosComponent
  ],
  templateUrl: './produtos-page.component.html',
  styleUrl: './produtos-page.component.css'
})
export class ProdutosPageComponent {
  cards = [{nomeItem: String, nomeMercado: String, precoItem: Number}]

  constructor(private produtosService: ProdutosService){
    this.cards = this.produtosService.getProdutos
  }
}
