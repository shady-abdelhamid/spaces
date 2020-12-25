import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './user.model';
@Injectable()
export class UsersService {
  private readonly baseRoute = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get(this.baseRoute).pipe(
      map((value: any) => {
        const { data } = value;

        return data.map(user => new User(user));
      })
    );
  }

  public getUserById(id: number): Observable<User> {
    return this.http.get(`${this.baseRoute}/${id}`).pipe(
      map((value) => new User(value))
    );
  }

  public createUser(name: string, job: string): Observable<User> {
    const payload = { name, job };

    return this.http.post(this.baseRoute, payload).pipe(
      map((value) => new User(value))
    );
  }

  public updateUser(id: number, name: string, job: string): Observable<User> {
    const payload = { name, job };

    return this.http.put(`${this.baseRoute}/${id}`, payload).pipe(
      map((value) => new User(value))
    );
  }

}
