import {Component} from '@angular/core';
import {CarrosselComponent} from '../../componentes/carrosseis/carrossel-imagens/carrossel.component';
import {CarrosselProdutosComponent} from '../../componentes/carrosseis/carrossel-produtos/carrossel-produtos.component';
import {CarrosselMercadosComponent} from '../../componentes/carrosseis/carrossel-mercados/carrossel-mercados.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarrosselComponent,
    CarrosselProdutosComponent,
    CarrosselMercadosComponent,
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
