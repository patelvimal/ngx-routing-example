import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
    users$: Observable<User[]>;
    constructor(public userService: UserService) {
        this.users$ = of();
    }

    ngOnInit(): void {
        this.users$ = this.userService.getAllUser();
    }
}
