import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
} from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  @Input() currentPage: number = 0;
  itemsPerPage = input.required<number>();
  totalItems = input.required<number>(); // Cambia esto según el número total de elementos
  maxPagesToShow: number = 5; // Número máximo de páginas a mostrar al mismo tiempo
  @Output() pageChange = new EventEmitter<PageChangedEvent>();

  get totalPages(): number {
    return Math.ceil(this.totalItems() / this.itemsPerPage());
  }

  get pages(): number[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const max = this.maxPagesToShow;
    const half = Math.floor(max / 2);

    let start = Math.max(1, current - half);
    let end = Math.min(total, current + half);

    if (current <= half) {
      end = Math.min(total, max);
    } else if (current + half >= total) {
      start = Math.max(1, total - max + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit({ page, itemsPerPage: this.itemsPerPage() });
    }
  }
}
