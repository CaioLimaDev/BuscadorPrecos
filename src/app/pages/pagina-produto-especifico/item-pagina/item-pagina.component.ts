import { Component, OnInit } from '@angular/core';
import { NavegacaoConteudoComponent } from '../navegacao-conteudo/navegacao-conteudo.component';
import { ProdutoApresentacaoComponent } from '../produto-apresentacao/produto-apresentacao.component';
import { InformacoesGeraisComponent } from '../informacoes-gerais/informacoes-gerais.component';
import { ProdutosRelacionadosComponent } from '../produtos-relacionados/produtos-relacionados.component';
import { PropsService } from '../../../services/props/props.service';
import { Produtos } from '../../../services/produtos/produtos.service';


@Component({
  selector: 'app-item-pagina',
  standalone: true,
  imports: [
    NavegacaoConteudoComponent,
    ProdutoApresentacaoComponent,
    InformacoesGeraisComponent,
    ProdutosRelacionadosComponent
  ],
  templateUrl: './item-pagina.component.html',
  styleUrl: './item-pagina.component.css'
})
export class ItemPaginaComponent implements OnInit{

  produto: Produtos[] = []

  constructor(
    private propsService: PropsService
  ){}

  ngOnInit(): void {
    this.propsService.propAtualProduto$.subscribe(produto => {
      if(produto){
        console.log([produto])
        this.aplicarProdutoSelecionado([produto])
      }
    })
  }

  aplicarProdutoSelecionado(produto: Produtos[]){
    this.produto = produto;
  }
}
