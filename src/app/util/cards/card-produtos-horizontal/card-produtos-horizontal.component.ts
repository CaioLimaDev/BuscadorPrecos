import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PropsService } from '../../../services/props/props.service';
import { Router } from '@angular/router';
import { Produtos } from '../../../services/produtos/produtos.service';
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


  constructor(
    private router: Router,
    private propsService: PropsService
  ) {}

  ngOnInit(): void {
  }

  irParaItemPage(filtro: Produtos) {
    this.propsService.atualizarProdutoDesejado(filtro)
    console.log(filtro)
    this.router.navigate(['/item-pagina']);
  }
}
