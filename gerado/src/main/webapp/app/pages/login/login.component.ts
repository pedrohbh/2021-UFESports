import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `<mat-card ></mat-card>
   
   <form>
   <External Component id="mat-card-header" value={{ this.state.mat-card-header }} />
		<External Component id="mat-card-title" value={{ this.state.mat-card-title }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-hint" value={{ this.state.mat-hint }} />
		<External Component id="mat-hint" value={{ this.state.mat-hint }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-hint" value={{ this.state.mat-hint }} />
		
	
	
	<button (click)="onSubmit">onSubmit</button>
	
	</form>`
})
export class login implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
	onSubmit() : void 
	{
		//TODO To be implemented
	}
    
}