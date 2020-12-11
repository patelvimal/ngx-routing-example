import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';
import { BookInfoComponent } from './book-info/book-info.component';



@NgModule({
  declarations: [BookListComponent, BookInfoComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
