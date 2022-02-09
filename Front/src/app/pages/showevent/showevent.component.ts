import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EventoService } from 'src/app/shared/services/eventos.services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { EventHasStudentService } from '../../shared/services/eventHasStudent.service';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.scss']
})
export class ShoweventComponent implements OnInit {

  events = [];
  myEvents = [];
  studentId: number;

  constructor(
    private eventoService :EventoService,
    private cookieService: CookieService,
    private eventHasStudentService: EventHasStudentService
    ) { }

  ngOnInit(): void {
    this.studentId = parseFloat(this.cookieService.get('studentId'));
    this.listEvents();
    this.listMyEvents();
  }

  async listEvents(){
    const events = await this.eventoService.getEvent();
    this.events = events[0];
  }

  async listMyEvents(){
    const events = await this.eventHasStudentService.findAll(this.studentId);
    this.myEvents = events[0];
  }

  async subscrible(event){
    try {
      await this.eventHasStudentService.subscrible(this.studentId, event.id);
      alert("Legal! Inscrito no evento com sucesso. Obrigado pela sua participação!");
      event.currentlyEnrolled += 1;
      this.myEvents.push(event);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

  async unsubscrible(event){
    try {
      await this.eventHasStudentService.unsubscrible(this.studentId, event.id);
      alert("Cancelamos sua inscrição conforme solicitado!");
      event.currentlyEnrolled -= 1;
      const index = this.myEvents.find(myevent => myevent.id == event.id);
      this.myEvents.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }


  verifySubscrible(eventId: number){
    const event = this.myEvents.find(event => event.id == eventId);
    if(event){
      return true;
    }
    return false;
  }

}
