import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../model/book.model';
import { BookService } from './book.service';

@Injectable()
export class BookResolver implements Resolve<Book | undefined> {
    constructor(public bookService: BookService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ):
        | Book
        | Observable<Book | undefined>
        | Promise<Book | undefined>
        | undefined {
        const title = route.paramMap.get('bookTitle');
        if (title) {
            return this.bookService.getBookByTitle(title);
        } else {
            return undefined;
        }
    }
}
