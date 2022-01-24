import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators";
import { User } from '../../shared/models/user.model';


export interface LoginForm {
  email: string;
  password: string;
};

export const JWT_NAME = 'blog-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(loginForm: LoginForm) {  

    return this.http.post<any>(
      'https://angular-course-8fdf4-default-rtdb.firebaseio.com/users.json',
      {email: loginForm.email, password: loginForm.password}
      ).pipe(
      map((token) => {
        console.log('token' + token.access_token);
        localStorage.setItem(JWT_NAME, token.access_token);
        return token;
      })
    )
  }

  register(user: User) {
    return this.http.post<any>('/api/users', user);
  }
}
