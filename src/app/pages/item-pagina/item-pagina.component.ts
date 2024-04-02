import { Component } from '@angular/core';
import { NavegacaoConteudoComponent } from '../../util/navegacao-conteudo/navegacao-conteudo.component';
import { ProdutoApresentacaoComponent } from '../../util/produto-apresentacao/produto-apresentacao.component';
import { InformacoesGeraisComponent } from '../../util/informacoes-gerais/informacoes-gerais.component';
import { ProdutosRelacionadosComponent } from '../../util/produtos-relacionados/produtos-relacionados.component';


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
