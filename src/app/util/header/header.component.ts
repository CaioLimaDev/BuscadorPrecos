import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {Mercados, MercadosService} from '../../services/mercados/mercados.service';
import {Categorias, CategoriasService} from '../../services/categorias/categorias.service';
import {FormsModule} from '@angular/forms';
import {PropsService} from '../../services/props/props.service';
import {ProdutosFiltroDTO} from '../../services/produtos/produtos.service';
import {MegaMenuItem, MenuItem} from 'primeng/api';
import {MegaMenuModule} from 'primeng/megamenu';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {RippleModule} from "primeng/ripple";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MegaMenuModule,
    ButtonModule,
    AvatarModule,
    RippleModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  mercados: Mercados[] = [];
  mercadosItens: MenuItem[] = [];
  categorias: Categorias[];
  itens: MegaMenuItem[] | undefined;

  produtosFiltrosDTO: ProdutosFiltroDTO = {
    categoria: [],
    nomeProduto: '',
    mercado: [],
    precoProduto: 0
  }
  isDropdownOpen: number = 0;

  constructor(
    private mercadosService: MercadosService,
    private categoriasService: CategoriasService,
    private router: Router,
    private filtroService: PropsService
  ) {
    this.categorias = this.categoriasService.getCategorias;
  }

  ngOnInit() {
    this.mercadosService.getMercados().subscribe(
      mercados => {
        this.mercados = mercados.result;
        console.log(mercados.nome)
        this.mercadosItens = mercados.nome;
      }
    );
    console.log(this.mercadosItens)
    this.itens = [
      {
        label: 'Produto',
        root: true,
        icon: 'pi pi-barcode',
      },
      {
        label: 'Mercados',
        root: true,
        icon: 'pi pi-shopping-cart',
      }
    ]
  }

  inserirCategoria(categoria: Categorias[]) {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      categoria: [],
      nomeProduto: '',
      mercado: [],
      precoProduto: 0
    }
    this.alterarFiltro(produtosFiltroDTO);
  }

  alterarFiltro(filtro: ProdutosFiltroDTO) {
    this.filtroService.atualizarProdutoBuscado(filtro)
    this.router.navigate(['/produtos-page'])
  }

  irParaMercado(filtro: Mercados) {
    this.filtroService.atualizarMercadoDesejado(filtro)
    this.router.navigate(['/mercados-page'])
  }

  openDropdown(index: number) {
    this.isDropdownOpen = index;
  }

  closeDropdown(index: number) {
    this.isDropdownOpen = 0;
  }

  irParaProdutos() {
    this.router.navigate(['/produtos-page'])
  }
}
