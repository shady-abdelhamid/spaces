import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';
@Injectable()
export class UsersService {
  private readonly baseRoute = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseRoute).pipe(
      map((value: any) => {
        const { data } = value;
        data.forEach((user, i) => {
          data[i] = new User(user);
        });

        return data;
      })
    )
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    );
  }

}
