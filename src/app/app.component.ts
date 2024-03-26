import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrosselComponent } from './util/carrosseis/carrossel-imagens/carrossel.component';
import { NgbCarouselConfig,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosselProdutosComponent } from './util/carrosseis/carrossel-produtos/carrossel-produtos.component';
import { CarrosselMercadosComponent } from './util/carrosseis/carrossel-mercados/carrossel-mercados.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarrosselComponent,
    NgbCarouselModule,
    CarrosselProdutosComponent,
    CarrosselMercadosComponent
  ],
  providers: [
    NgbCarouselConfig
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buscadorprecos';

  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 1000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
