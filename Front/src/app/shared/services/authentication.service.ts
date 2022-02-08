import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export const JWT = 'token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.URL_UFES_SPORT_BACK}/users`;

  login(login: any) : Promise<any>{
    console.log(environment.URL_UFES_SPORT_BACK);

    console.log(this.baseUrl);

    return this.http.post<any>(`${this.baseUrl}/login`, login).toPromise();
  }

  register(user: any): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/create`, user).toPromise();
  }
}
