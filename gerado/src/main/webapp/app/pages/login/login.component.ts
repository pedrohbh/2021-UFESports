import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login',
  template: `<mat-card ></mat-card>
   
   <form>
   <mat-card-header  value="mat-card-header" /><mat-card-title  value="mat-card-title" /><mat-input  value="mat-input" /><mat-form-field  value="mat-form-field" /><mat-hint  value="mat-hint" /><mat-hint  value="mat-hint" /><mat-form-field  value="mat-form-field" /><mat-input  value="mat-input" /><mat-hint  value="mat-hint" />
	
	
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