import { Component } from '@angular/core';
import { NgbCarouselConfig,NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [
    NgbCarouselModule
  ],
  providers: [
    NgbCarouselConfig
  ],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.css'
})
export class CarrosselComponent {
	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1920/480`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.interval = 10000;
		config.wrap = false;
		config.keyboard = false;
		config.pauseOnHover = false;
	}
}
