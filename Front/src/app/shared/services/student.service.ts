import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export const JWT = 'token';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.URL_UFES_SPORT_BACK}/students`;

  findAll(page: number, limit: number) : Promise<any>{
    return this.http.get<any>(`${this.baseUrl}?page=${page}&limit=9999`).toPromise();
  }

  delete(id: number): Promise<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`).toPromise();
  }
}
