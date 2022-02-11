import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

export const JWT = 'token';

@Injectable({
  providedIn: 'root'
})
export class EventHasStudentService {

  constructor(private http: HttpClient) { }

  private baseUrl = `${environment.URL_UFES_SPORT_BACK}/eventhasstudents`;

  findAll(studentId: number) : Promise<any>{
    return this.http.get<any>(`${this.baseUrl}/${studentId}`).toPromise();
  }

  subscrible(studentId: number, eventId: number): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/subscrive`, {studentid: studentId, eventid: eventId}).toPromise();
  }

  unsubscrible(studentId: number, eventId: number): Promise<any> {
    return this.http.post<any>(`${this.baseUrl}/unsubscrive`, {studentid: studentId, eventid: eventId}).toPromise();
  }
}
