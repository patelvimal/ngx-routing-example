import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
    user$: Observable<User>;
    constructor(public route: ActivatedRoute) {
        this.user$ = of();
    }

    ngOnInit(): void {
        this.user$ = this.route.data.pipe(map((data => data['user']));
    }
}
