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
export class BookResolver implements Resolve<Book[]> {
    constructor(public bookService: BookService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Book[] | Observable<Book[]> | Promise<Book[]> {
        const title = route.paramMap.get('bookTitle');
        return this.bookService.getBookByTitle(title!);
    }
}
