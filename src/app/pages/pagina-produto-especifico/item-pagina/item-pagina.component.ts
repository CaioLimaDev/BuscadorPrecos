import {Component, OnInit} from '@angular/core';
import {NavegacaoConteudoComponent} from '../navegacao-conteudo/navegacao-conteudo.component';
import {ProdutoApresentacaoComponent} from '../produto-apresentacao/produto-apresentacao.component';
import {InformacoesGeraisComponent} from '../informacoes-gerais/informacoes-gerais.component';
import {ProdutosRelacionadosComponent} from '../produtos-relacionados/produtos-relacionados.component';
import {PropsService} from '../../../services/props/props.service';
import {Produtos, ProdutosFiltroDTO, ProdutosService} from '../../../services/produtos/produtos.service';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MapaMercadosComponent} from "../../../componentes/mapa-mercados/mapa-mercados.component";

@Component({
  selector: 'app-item-pagina',
  standalone: true,
  imports: [
    NavegacaoConteudoComponent,
    ProdutoApresentacaoComponent,
    InformacoesGeraisComponent,
    ProdutosRelacionadosComponent,
    RouterLink,
    RouterOutlet,
    MapaMercadosComponent
  ],
  templateUrl: './item-pagina.component.html',
  styleUrl: './item-pagina.component.css'
})
export class ItemPaginaComponent implements OnInit{
  produto: Produtos = {
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
  }

  produtosRelacionados: Produtos[] = []

  constructor(
    private propsService: PropsService,
    private produtoService: ProdutosService
  ){}

  ngOnInit(): void {
    this.propsService.propAtualProduto$.subscribe(produto => {
      if(produto){
        this.aplicarProdutoSelecionado(produto)
        this.buscarRelacionados(produto)
      }
    })
  }

  aplicarProdutoSelecionado(produto: Produtos){
    this.produto = produto;
  }

  buscarRelacionados(produto: Produtos){
    let filtro: ProdutosFiltroDTO = {
      nomeProduto: produto.nomeProduto.slice(0,20)
    }
    this.produtoService.getProdutos(filtro).subscribe(
      produto => this.produtosRelacionados = produto.result
    )
  }
}
