import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, first, map, tap } from 'rxjs/operators';
import { BooksModule } from '../books.module';
import { Book } from '../model/book.model';

@Injectable()
export class BookService implements IBookService {
    constructor(public http: HttpClient) {}

    getAll(): Observable<Book[]> {
        return this.http.get<Book[]>('jsonData/books.json').pipe(delay(300));
    }

    getBookByTitle(title: string): Observable<Book | undefined> {
        return this.getAll().pipe(
            map((data) => data.find(d => d.url === title))
        );
    }
}

export interface IBookService {
    getAll(): Observable<Book[]>;
    getBookByTitle(title: string): Observable<Book | undefined>;
}
