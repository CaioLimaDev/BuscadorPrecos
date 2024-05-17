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

  @Input() card: Produtos = {
    id: 0,
    categoria: "",
    precoProduto: 0,
    nomeProduto: "",
    mercado: {
      id: 0,
      nome: '',
      logo: ''
    },
    imagem: "",
    unidadeMedida: ""
  };


  constructor(
    private router: Router,
    private propsService: PropsService
  ) {}

  ngOnInit(): void {
  }

  irParaItemPage(id: number) {
    this.propsService.atualizarProdutoDesejado(id)
    this.router.navigate(['/item-pagina']);
  }
}
