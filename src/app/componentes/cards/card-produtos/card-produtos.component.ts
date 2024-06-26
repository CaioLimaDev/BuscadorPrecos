import {Component, Input, OnInit} from '@angular/core';
import {CommonModule, NgFor, SlicePipe} from '@angular/common';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {PropsService} from '../../../services/props/props.service';
import {Produtos} from '../../../services/produtos/produtos.service';
import {MercadoDTO, Mercados} from "../../../services/mercados/mercados.service";

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    CommonModule,
    SlicePipe
  ],
  templateUrl: './card-produtos.component.html',
  styleUrl: './card-produtos.component.css'
})

export class CardProdutosComponent implements OnInit {

  @Input() card: Produtos = {
    id: 0,
    categoria: "",
    imagem: "",
    mercado: {
      id: 0,
      nome: '',
      logo: '',
    },
    nomeProduto: "",
    precoProduto: 0,
    unidadeMedida: ""
  };

  @Input() mercadoSubstituto: MercadoDTO | null = {
    id: 0,
    nome: '',
    logo: '',
    produtos: []
  }

  constructor(
    private router: Router,
    private propsService: PropsService,
  ) {}

  ngOnInit(): void {
  }

  irParaItemPage(id: number) {
    this.propsService.atualizarProdutoDesejado(id)
    this.router.navigate(['/item-pagina']);
  }
}


