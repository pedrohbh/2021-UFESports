import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { EventoService } from 'src/app/shared/services/eventos.services';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.scss']
})
export class CreateeventComponent implements OnInit {

  createeventForm: FormGroup;

  constructor(private eventoService :EventoService, private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {
    this.createeventForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      sport_id: [null, [Validators.required]],
      location: [null, [Validators.required]],
      date: [null, [Validators.required]],
      min: [null, [Validators.required]],
      max: [null, [Validators.required]],
      currently_enrolled:[null, [Validators.required]]
    });

  }


  async onSubmit() {

    if(this.createeventForm.invalid){
      this.createeventForm.markAllAsTouched();
      return;
    }

    const form = this.createeventForm.value;

    const event = { 
      
      title: form.title,
      location: form.location,
      date: form.date,
      min: form.min,
      max: form.max,
      currently_enrolled:form.currently_enrolled,
      sport:{
           name: this.createeventForm.value.sport_id,
         
       }  
    }
    try {
      await this.eventoService.createEvent(event);
      this.router.navigate(['events']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  
    console.log(event);
   
  }
}
