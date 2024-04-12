import { Component } from '@angular/core';
import { PropsService } from '../../../services/props/props.service';
import { ProdutosFiltroDTO } from '../../../services/produtos/produtos.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busca',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './barra-busca.component.html',
  styleUrl: './barra-busca.component.css'
})
export class BarraBuscaComponent {

  produtosFiltroDTO: ProdutosFiltroDTO = {
    catetegoriaItem: [],
    nomeItem: '',
    nomeMercado: [],
    precoItem: 0
  }

  constructor(
    private propsService: PropsService,
    private router: Router
  ){}

  buscarProduto(filtro: ProdutosFiltroDTO){
    console.log(filtro)
    this.propsService.atualizarProdutoBuscado(filtro)
    this.router.navigate(['/produtos-page'])
  }
}
