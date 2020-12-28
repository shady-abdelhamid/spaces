import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseRoute = 'https://reqres.in/api/login';

  constructor(private http: HttpClient) { }

  public login(email: string, pwd: string): Observable<any> {
    const payload = {
      email,
      password: pwd
    };

    return this.http.post(this.baseRoute, payload).pipe(
      tap(res => this.setSession(res)),
      shareReplay());
  }

  private setSession(authResult): void {
    const { token } = authResult;
    localStorage.setItem('token', token);
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');

    return token != null;
  }


}
