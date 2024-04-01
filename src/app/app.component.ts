import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
<<<<<<< HEAD
import { CarrosselComponent } from './util/carrossel/carrossel.component';
import { NgbCarouselConfig,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarrosselProdutosComponent } from './util/carrossel-produtos/carrossel-produtos.component';
=======
>>>>>>> 7b8861dddb473a04b9ec41452cac483d4de312b8


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
<<<<<<< HEAD
    CarrosselComponent,
    NgbCarouselModule,
    CarrosselProdutosComponent,
  ],
  providers: [
    NgbCarouselConfig
=======
>>>>>>> 7b8861dddb473a04b9ec41452cac483d4de312b8
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'buscadorprecos';

<<<<<<< HEAD
  constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 1000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
=======

>>>>>>> 7b8861dddb473a04b9ec41452cac483d4de312b8
}
