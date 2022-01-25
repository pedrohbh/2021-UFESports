import {Evento} from '../models/eventos.model'
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable()
export class EventoService{

    url = 'http://localhost:4200/eventos';

    // injetando o HttpClient
    constructor(private httpClient: HttpClient) { }

    public getEventos(): Observable<Evento[]> {
        return this.httpClient.get<Evento[]>(this.url)
          .pipe(
            retry(2),
            catchError(this.handleError))
    }

    // Manipulação de erros
    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };

  
}

