import { Component } from '@angular/core';
import { CarrosselComponent } from '../../util/carrosseis/carrossel-imagens/carrossel.component';
import { CarrosselProdutosComponent } from '../../util/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { CarrosselMercadosComponent } from '../../util/carrosseis/carrossel-mercados/carrossel-mercados.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CarrosselComponent,
    CarrosselProdutosComponent,
    CarrosselMercadosComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
