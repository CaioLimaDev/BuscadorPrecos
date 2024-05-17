import { Component, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { Router } from '@angular/router';
import { PropsService } from '../../../services/props/props.service';
import { Produtos } from '../../../services/produtos/produtos.service';

@Component({
  selector: 'app-card-produtos',
  standalone: true,
  imports: [
    NgFor,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    SlicePipe
  ],
  templateUrl: './card-produtos.component.html',
  styleUrl: './card-produtos.component.css'
})

export class CardProdutosComponent implements OnInit {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1366/720`);

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

  constructor(
    private router: Router,
    private propsService: PropsService,
  ) {}

  ngOnInit(): void {
  }

  irParaItemPage(id: number) {
    this.propsService.atualizarProdutoDesejado(id)
    console.log()
    this.router.navigate(['/item-pagina']);
  }
}


