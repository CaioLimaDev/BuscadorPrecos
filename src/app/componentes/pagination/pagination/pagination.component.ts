import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf} from '@angular/common';
import {PaginationService} from "../../../services/pagination/pagination.service";
import {PaginatorModule} from 'primeng/paginator';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    CommonModule,
    PaginatorModule
  ],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  numeroPaginas: number[] = [];
  currentPage: number = 0;
  maxPaginasVisiveis: number = 5;
  paginasVisiveis: number[] = [];

  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    this.paginationService.currentPage$.subscribe(page => {
      this.currentPage = page;
      this.calcularPaginasVisiveis();
    });

    this.paginationService.totalPages$.subscribe(total => {
      this.numeroPaginas = Array.from({ length: total }, (_, i) => i);
      this.calcularPaginasVisiveis();
    });
  }

  calcularPaginasVisiveis() {
    const totalPaginas = this.numeroPaginas.length;
    const currentPage = this.currentPage;
    const halfWay = Math.floor(this.maxPaginasVisiveis / 2);

    if (totalPaginas <= this.maxPaginasVisiveis) {
      this.paginasVisiveis = this.numeroPaginas;
    } else if (currentPage <= halfWay) {
      this.paginasVisiveis = [...this.numeroPaginas.slice(0, this.maxPaginasVisiveis - 1), -1];
    } else if (currentPage >= totalPaginas - halfWay) {
      this.paginasVisiveis = [-1, ...this.numeroPaginas.slice(totalPaginas - (this.maxPaginasVisiveis - 1))];
    } else {
      this.paginasVisiveis = [-1, ...this.numeroPaginas.slice(currentPage - halfWay + 1, currentPage + halfWay), -1];
    }
  }

  selecionarPagina(page: number) {
    if (page >= 0 && page < this.numeroPaginas.length) {
      this.paginationService.setCurrentPage(page);
    }
  }
}
