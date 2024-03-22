import { Component, Input } from '@angular/core';
import { CardProdutosComponent } from '../card-produtos/card-produtos.component';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-carrossel-produtos',
  standalone: true,
  imports: [
    CardProdutosComponent,
    NgbCarousel,
    NgIf,
    NgFor
  ],
  templateUrl: './carrossel-produtos.component.html',
  styleUrl: './carrossel-produtos.component.css'
})
export class CarrosselProdutosComponent {
  
  cards = [
      { nomeItem: 'Heineken', nomeMercado: 'Atacadão', precoItem: 20 },
      { nomeItem: 'Brahma', nomeMercado: 'Pão de Açucar', precoItem: 30 },
      { nomeItem: 'Skol', nomeMercado: 'Hiper Moreira', precoItem: 10 },
      { nomeItem: 'Heineken', nomeMercado: 'Bretas', precoItem: 20 }
    ]

}
