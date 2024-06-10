import {Component, Input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PropsService} from '../../../services/props/props.service';
import {Produtos} from '../../../services/produtos/produtos.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card-produtos-horizontal',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './card-produtos-horizontal.component.html',
  styleUrl: './card-produtos-horizontal.component.css'
})
export class CardProdutosHorizontalComponent {
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
