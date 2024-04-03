import { Component } from '@angular/core';
import { NavegacaoConteudoComponent } from '../navegacao-conteudo/navegacao-conteudo.component';
import { ProdutoApresentacaoComponent } from '../produto-apresentacao/produto-apresentacao.component';
import { InformacoesGeraisComponent } from '../informacoes-gerais/informacoes-gerais.component';
import { ProdutosRelacionadosComponent } from '../produtos-relacionados/produtos-relacionados.component';


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
export class ItemPaginaComponent {

}
