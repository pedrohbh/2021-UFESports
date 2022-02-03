import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EventoService } from 'src/app/shared/services/eventos.services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-showevent',
  templateUrl: './showevent.component.html',
  styleUrls: ['./showevent.component.scss']
})
export class ShoweventComponent implements OnInit {

  public events: any[];

  constructor(private eventoService :EventoService) { }
 
  ngOnInit(): void {
    console.log(this.eventoService.getEvent());
    this.eventoService.getEvent().then((event2:any[])=>{
        this.events = event2[0];
       
    })

  }

}
