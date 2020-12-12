import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../model/book.model';

@Component({
    selector: 'app-book-info',
    templateUrl: './book-info.component.html',
    styleUrls: ['./book-info.component.css'],
})
export class BookInfoComponent implements OnInit {
    book$: Observable<Book>;
    constructor(public route: ActivatedRoute) {
      this.book$ = of();
    }

    ngOnInit(): void {
        this.book$ = this.route.data.pipe(map((data) => data['book']));
        this.book$.subscribe(data=> {
          console.log(data);
        })
    }
}
