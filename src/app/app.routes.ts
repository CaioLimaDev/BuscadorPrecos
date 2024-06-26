import {Routes} from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageMercadosComponent} from './pages/page-mercados/page-mercados.component';
import {ProdutosPageComponent} from './pages/produtos-page/produtos-page.component';
import {ItemPaginaComponent} from './pages/pagina-produto-especifico/item-pagina/item-pagina.component';
import {ListaComprasComponent} from "./pages/lista-compras/lista-compras.component";

export const routes: Routes = [
  {path: '', component: HomePageComponent, title: 'Home'},
  {path: 'mercados-page', component: PageMercadosComponent, title: 'Mercados'},
  {path: 'produtos-page', component: ProdutosPageComponent, title: 'Produtos'},
  {path: 'item-pagina', component: ItemPaginaComponent, title: 'Item'},
  {path: 'lista-compras', component: ListaComprasComponent, title: 'ListaCompras'}
];
