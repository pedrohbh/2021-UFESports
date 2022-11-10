import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createevent',
  template: `<mat-card ></mat-card><mat-card ></mat-card><p id="descricaosport">{{ descricaosport }}</p>
   
   <form>
   <External Component id="mat-card-header" value={{ this.state.mat-card-header }} />
		<External Component id="mat-card-title" value={{ this.state.mat-card-title }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		
	
	
	<button (click)="onSubmit">onSubmit</button>
	
	</form>`
})
export class createevent implements OnInit
{this.state = {descricaosport : "";
		constructor() { }

  ngOnInit(): void 
  {
  }
	onSubmit() : void 
	{
		//TODO To be implemented
	}
    
}