import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable()
export class EventoService{

    constructor(private http: HttpClient) { }

    private baseUrl = `${environment.URL_UFES_SPORT_BACK}/events`;

    createEvent(event:any) {
      return this.http.post<any>(`${this.baseUrl}`, event).toPromise();
    }

    getEvent() {
      return this.http.get<any>(`${this.baseUrl}`).toPromise();
    }

    deleteEvent(id: number) {
      return this.http.delete<any>(`${this.baseUrl}/${id}`).toPromise();
    }

    getSport() {
      return this.http.get<any>('http://localhost:3000/sports?page=1&limit=9999').toPromise()
    }
}
