import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, Observable} from 'rxjs';
import {Produtos, ProdutosFiltroDTO, ProdutosService} from '../produtos/produtos.service';
import {MercadoDTO, Mercados, MercadosService} from '../mercados/mercados.service';

@Injectable({
  providedIn: 'root'
})
export class PropsService {

  constructor(
    private produtoService: ProdutosService,
    private mercadoService: MercadosService,
  ) { }

  private filtroMercado = new BehaviorSubject<MercadoDTO | null>(null);
  filtroAtualMercado$ = this.filtroMercado.asObservable();

  atualizarMercadoDesejado(mercado: Mercados){
    let mercadoOutput: MercadoDTO;

    this.mercadoService.getMercadosPorId(mercado.id).subscribe(
      mercado => {
        mercadoOutput = mercado;
        this.filtroMercado.next(mercadoOutput)
      }
    )
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


}
