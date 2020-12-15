import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../models/user.model';

@Injectable()
export class UserService implements IUserService {
    constructor(public http: HttpClient) {}

    getAllUser(): Observable<User[]> {
        return this.http.get<User[]>('jsonData/books.json').pipe(delay(200));
    }

    getUserById(id: number): Observable<User | undefined> {
        return this.getAllUser().pipe(
            map((data) => data.find((d) => d.id === id))
        );
    }
}

export interface IUserService {
    getAllUser(): Observable<User[]>;
    getUserById(id: number): Observable<User | undefined>;
}
