import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: {categoriaDescricao: String}[] = [
    {categoriaDescricao: 'Hortifruti'},
    {categoriaDescricao: 'Destilados'},
    {categoriaDescricao: 'Limpeza'},
    {categoriaDescricao: 'Padaria e confeitaria'}
  ]

  constructor() { }

  
  public get getCategorias() : any {
    return this.categorias
  }
  
}
