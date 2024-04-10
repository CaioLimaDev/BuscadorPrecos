import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProdutosFiltroDTO } from '../produtos/produtos.service';
import { Categorias } from '../categorias/categorias.service';

@Injectable({
  providedIn: 'root'
})
export class FiltrosService {
  private filtroSource = new BehaviorSubject<ProdutosFiltroDTO | null>(null);
  filtroAtual$ = this.filtroSource.asObservable();

  atualizarFiltroCategoria(filtro: Categorias[]) {
    let produtosFiltroDTO: ProdutosFiltroDTO = {
      nomeItem: '',
      nomeMercado: [],
      precoItem: 0,
      catetegoriaItem: filtro,
    }
    this.filtroSource.next(produtosFiltroDTO);
  }
  constructor() { }
}
