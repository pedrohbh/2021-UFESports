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
    this.formInit();
    this.listSports();
  }

  formInit() {
    this.createeventForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      sport_id: [1, [Validators.required]],
      location: [null, [Validators.required]],
      date_of_the_event: [null, [Validators.required]],
      minimum_number_of_participants: [null, [Validators.required]],
      maximum_number_of_participants: [null, [Validators.required]],
    });
  }

  async listSports(){
    const sports = await this.eventoService.getSport();
    this.sports = sports[0];
    this.formInit();
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
