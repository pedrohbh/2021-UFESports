import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EventoService } from 'src/app/shared/services/eventos.services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.scss']
})
export class ShoweventComponent implements OnInit {

  public events: any[];

  constructor(private eventoService :EventoService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.listEvents();
  }

  async listEvents(){
    const events = await this.eventoService.getEvent();
    this.events = events[0];
  }

  subscrible(){
    console.log(this.cookieService.get('userId'));
  }

}
