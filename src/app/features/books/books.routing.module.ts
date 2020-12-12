import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookInfoComponent } from './book-info/book-info.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookResolver } from './services/book.resolver';

const routes: Routes = [
    {
        path: ':bookTitle',
        component: BookInfoComponent,
        resolve:{
            book: BookResolver
        }
    },
    {
        path: '',
        component: BookListComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BooksRoutingModule {}
