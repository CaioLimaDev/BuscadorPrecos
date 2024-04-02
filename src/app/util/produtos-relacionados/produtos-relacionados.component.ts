import { Component } from '@angular/core';
import { CardProdutosHorizontalComponent } from '../cards/card-produtos-horizontal/card-produtos-horizontal.component';
import { ProdutosService } from '../../services/produtos/produtos.service';
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
  produtos = [{nomeItem: String, nomeMercado: String, precoItem: Number}]

  constructor(private produtoService:ProdutosService){
    this.produtos = this.produtoService.getProdutos;
  }
}
