import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-produtos-horizontal',
  standalone: true,
  imports: [],
  templateUrl: './card-produtos-horizontal.component.html',
  styleUrl: './card-produtos-horizontal.component.css'
})
export class CardProdutosHorizontalComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1366/800`);

  @Input() card: any;
}
