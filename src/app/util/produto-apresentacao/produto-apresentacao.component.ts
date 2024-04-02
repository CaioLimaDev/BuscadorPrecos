import { Component } from '@angular/core';

@Component({
  selector: 'app-produto-apresentacao',
  standalone: true,
  imports: [],
  templateUrl: './produto-apresentacao.component.html',
  styleUrl: './produto-apresentacao.component.css'
})
export class ProdutoApresentacaoComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/1366/720`);
  
}
