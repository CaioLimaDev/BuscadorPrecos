import { Component } from '@angular/core';
import { CardProdutosHorizontalComponent } from '../../../util/cards/card-produtos-horizontal/card-produtos-horizontal.component';
import { ProdutosService, Produtos } from '../../../services/produtos/produtos.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-produtos-relacionados',
  standalone: true,
  imports: [
    CardProdutosHorizontalComponent,
    NgFor
  ],
  templateUrl: './produtos-relacionados.component.html',
  styleUrl: './produtos-relacionados.component.css'
})
export class ProdutosRelacionadosComponent {
  produtos: Produtos[] = []

  constructor(private produtoService:ProdutosService){
    this.produtoService.getProdutos().subscribe(
      produto => this.produtos = produto.result
    );
  }
}
