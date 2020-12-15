import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';
import { BooksRoutingModule } from './books.routing.module';
import { BookResolver } from './services/book.resolver';
import { BookService } from './services/book.service';

@NgModule({
    declarations: [BookListComponent, BookInfoComponent],
    imports: [
        CommonModule,
        MatCardModule,
        HttpClientModule,
        MatGridListModule,
        BooksRoutingModule,
        MatListModule,
    ],
    providers: [BookService, BookResolver],
})
export class BooksModule {}
