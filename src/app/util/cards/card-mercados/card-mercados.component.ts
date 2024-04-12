import { Component, Input, Output } from '@angular/core';
import { RouterLink,RouterLinkActive, RouterOutlet } from '@angular/router';
import { Mercados } from '../../../services/mercados/mercados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-mercados',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './card-mercados.component.html',
  styleUrl: './card-mercados.component.css'
})
export class CardMercadosComponent { 
  @Input() cards: any;

  @Output() infoMercados: Mercados[] = [];


}
