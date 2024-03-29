import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageMercadosComponent } from './pages/page-mercados/page-mercados.component';
import { ProdutosPageComponent } from './pages/produtos-page/produtos-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent, title: 'Home' },
    { path: 'mercados-page', component: PageMercadosComponent, title: 'Mercados' },
    { path: 'produtos-page', component: ProdutosPageComponent, title: 'Produtos' }
];
