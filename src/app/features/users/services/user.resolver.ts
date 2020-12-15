import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class UserResolver implements Resolve<User[]> {
    constructor(public userService: UserService) {}
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): User[] | Observable<User[]> | Promise<User[]> {
        return this.userService.getAllUser();
    }
}
