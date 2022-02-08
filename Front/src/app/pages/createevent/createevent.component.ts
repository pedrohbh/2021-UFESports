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
 
  public sports: any[];
  createeventForm: FormGroup;
  

  constructor(private eventoService :EventoService, private formBuilder: FormBuilder, private router: Router) {}
  
  ngOnInit(): void {
    this.createeventForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      sport_id: [null, [Validators.required]],
      location: [null, [Validators.required]],
      date_of_the_event: [null, [Validators.required]],
      minimum_number_of_participants: [null, [Validators.required]],
      maximum_number_of_participants: [null, [Validators.required]],
      currently_enrolled:[null, [Validators.required]]
    });

        //console.log(this.eventoService.getEvent());
        //console.log(this.eventoService.getSport());
      
      this.eventoService.getSport().then((sport2:any[])=>{  
            this.sports= sport2[0];
             
      })
      
      
      
  }


  async onSubmit() {

    if(this.createeventForm.invalid){
      this.createeventForm.markAllAsTouched();
      return;
    }

    const form = this.createeventForm.value;

    const event = { 
      
      title: form.title,
      dateOfTheEvent: form.date_of_the_event,
      location: form.location,
      minimumNumberOfParticipants: form.minimum_number_of_participants,
      maximumNumberOfParticipants: form.maximum_number_of_participants,
      currentlyEnrolled:form. currently_enrolled,
      sportId:this.createeventForm.value.sport_id,
      sport:{
           id: this.createeventForm.value.sport_id, 
       }  
    }
    try {
      await this.eventoService.createEvent(event);
      this.router.navigate(['events']);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  
    
   
  }
}
