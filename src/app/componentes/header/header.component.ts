import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Mercados, MercadosService} from '../../services/mercados/mercados.service';
import {FormsModule} from '@angular/forms';
import {PropsService} from '../../services/props/props.service';
import {BarraBuscaComponent} from './barra-busca/barra-busca.component';
import {ProdutosFiltroDTO, ProdutosService} from '../../services/produtos/produtos.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    BarraBuscaComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  mercados: Mercados[] = [];
  categorias: string[] = [];

  constructor(
    private mercadosService: MercadosService,
    private produtos: ProdutosService,
    private router: Router,
    private filtroService: PropsService
  ) {
    this.mercadosService.getMercados().subscribe(
      mercados => this.mercados = mercados.result
    );
    this.produtos.getCategoriasProdutos().subscribe(
      categorias => this.categorias = categorias
    );
  }

  inserirCategoria(categoria: string){
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      categoria: [categoria],
      nomeProduto: '',
      mercado: [],
      precoProduto: 0
    }
    this.alterarFiltro(produtosFiltroDTO);
  }

  alterarFiltro(filtro: ProdutosFiltroDTO){
    this.filtroService.atualizarProdutoBuscado(filtro)
    this.router.navigate(['/produtos-page'])
  }

  irParaMercado(filtro: Mercados){
    this.filtroService.atualizarMercadoDesejado(filtro)
    this.router.navigate(['/mercados-page'])
  }

  isDropdownOpen: number = 0;

  openDropdown(index: number) {
    this.isDropdownOpen = index;
  }

  closeDropdown(index: number) {
    this.isDropdownOpen = 0;
  }

  irParaProdutos(){
    this.router.navigate(['/produtos-page'])
  }
}
