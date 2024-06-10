import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navegacao-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './navegacao-conteudo.component.html',
  styleUrl: './navegacao-conteudo.component.css'
})
export class NavegacaoConteudoComponent {

  constructor(private router: Router) {
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
