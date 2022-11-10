import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `<mat-card ></mat-card>
   
   <form>
   <mat-card-header id="mat-card-header" value="mat-card-header" /><mat-card-title id="mat-card-title" value="mat-card-title" /><mat-input id="mat-input" value="mat-input" /><mat-form-field id="mat-form-field" value="mat-form-field" /><mat-hint id="mat-hint" value="mat-hint" /><mat-hint id="mat-hint" value="mat-hint" /><mat-form-field id="mat-form-field" value="mat-form-field" /><mat-input id="mat-input" value="mat-input" /><mat-hint id="mat-hint" value="mat-hint" />
	
	
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