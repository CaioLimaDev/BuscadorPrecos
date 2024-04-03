import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink,RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './card-produtos.component.html',
  styleUrl: './card-produtos.component.css'
})
export class CardProdutosComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1366/720`);

  @Input() card: any;
}


