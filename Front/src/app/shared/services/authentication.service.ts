import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, switchMap} from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, of } from 'rxjs';
import { User } from '../../shared/models/user.model';


export interface LoginForm {
  email: string;
  password: string;
};

export const JWT = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(login: any) : Promise<any>{
    return this.http.post<any>('http://localhost:3000/users/login', login).toPromise();
  }

  logout() {
    localStorage.removeItem(JWT);
  }

  register(user: any): Promise<any> {
    return this.http.post<any>('http://localhost:3000/users/create', user).toPromise();
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(JWT);
    return !this.jwtHelper.isTokenExpired(token);
  }

  getUserId(): Observable<number>{
    return of(localStorage.getItem(JWT)).pipe(
      switchMap((jwt: string) => of(this.jwtHelper.decodeToken(jwt)).pipe(
        map((jwt: any) => jwt.user.id)
      )
    ));
  }
}
