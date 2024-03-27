import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PageMercadosComponent } from './pages/page-mercados/page-mercados.component';

export const routes: Routes = [
    {path: 'HomePage', component: AppComponent},
    {path: 'MercadosPage', component: PageMercadosComponent}
];
