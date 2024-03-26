import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-mercados',
  standalone: true,
  imports: [],
  templateUrl: './card-mercados.component.html',
  styleUrl: './card-mercados.component.css'
})
export class CardMercadosComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/200/200`);
  
  @Input() card: any;
}
