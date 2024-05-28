import {Component, Input, Output} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Mercados} from '../../../services/mercados/mercados.service';
import {FormsModule} from '@angular/forms';
import {PropsService} from "../../../services/props/props.service";
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-card-mercados',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    CardModule,
    ButtonModule,
    RouterLinkActive,
    RouterOutlet
  ],
  templateUrl: './card-mercados.component.html',
  styleUrl: './card-mercados.component.css'
})
export class CardMercadosComponent {

  constructor(
    private router: Router,
    private filtroService: PropsService
  ) {
  }

  @Input() cards: Mercados = {
    id: 0,
    nome: "",
    logo: ""
  };

  @Output() infoMercados: Mercados = {
    id: 0,
    nome: "",
    logo: ""
  };

  irParaMercado(filtro: Mercados){
    this.filtroService.atualizarMercadoDesejado(filtro)
    this.router.navigate(['/mercados-page'])
  }
}
