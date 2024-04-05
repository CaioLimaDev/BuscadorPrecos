import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-card-produtos-horizontal',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive
  ],
  templateUrl: './card-produtos-horizontal.component.html',
  styleUrl: './card-produtos-horizontal.component.css'
})
export class CardProdutosHorizontalComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1366/800`);

  @Input() card: any;
}
