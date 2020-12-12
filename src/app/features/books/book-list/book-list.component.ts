import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from '../model/book.model';
import { BookService } from '../services/book.service';

@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
    books$: Observable<Book[]>;
    constructor(public bookService: BookService) {
        this.books$ = of([]);
    }

    ngOnInit(): void {
        this.books$ = this.bookService.getAll();
    }
}
