import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Produtos, ProdutosFiltroDTO, ProdutosService} from '../produtos/produtos.service';
import {Mercados} from '../mercados/mercados.service';

@Injectable({
  providedIn: 'root'
})
export class PropsService {
  private filtroMercado = new BehaviorSubject<Mercados>(<Mercados>({id: 0, nome: '',logo: ''}));
  filtroAtualMercado$ = this.filtroMercado.asObservable();

  atualizarMercadoDesejado(mercado: Mercados){
    let mercadoOutput: Mercados = {
      id: mercado.id,
      nome: mercado.nome,
      logo: mercado.logo
    }
    this.filtroMercado.next(mercadoOutput)
  }

  private produtoProps = new BehaviorSubject<Produtos | null>(null);
  propAtualProduto$ = this.produtoProps.asObservable();

  atualizarProdutoDesejado(id: number){
    let produtoOutput: Produtos;

    this.produtoService.getProdutosPorId(id).subscribe(
      produto => {
        produtoOutput = produto;
        this.produtoProps.next(produtoOutput)
      }
    )
  }

  private buscarProdutosProps = new BehaviorSubject<ProdutosFiltroDTO | null> (null);
  propProdutoBuscado$ = this.buscarProdutosProps.asObservable();

  atualizarProdutoBuscado(produtosFiltroDTO: ProdutosFiltroDTO ){
    let produtosFiltroOutput: ProdutosFiltroDTO = {
      categoria: produtosFiltroDTO.categoria,
      nomeProduto: produtosFiltroDTO.nomeProduto,
      mercado: produtosFiltroDTO.mercado,
      precoProduto: produtosFiltroDTO.precoProduto
    }
    this.buscarProdutosProps.next(produtosFiltroOutput);
  }

  constructor(private produtoService: ProdutosService) { }
}
