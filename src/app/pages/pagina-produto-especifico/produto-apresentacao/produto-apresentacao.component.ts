import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-produto-apresentacao',
  standalone: true,
  imports: [],
  templateUrl: './produto-apresentacao.component.html',
  styleUrl: './produto-apresentacao.component.css'
})
export class ProdutoApresentacaoComponent {
  @Input() produto: any;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
