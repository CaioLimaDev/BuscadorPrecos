import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageMercadosComponent } from './pages/page-mercados/page-mercados.component';

export const routes: Routes = [
    {path: '', component: HomePageComponent, title: 'Home'},
    {path: 'mercados-page', component: PageMercadosComponent, title: 'Mercados'}
];
