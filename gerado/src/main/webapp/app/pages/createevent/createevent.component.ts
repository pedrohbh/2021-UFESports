import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'createevent',
  template: `<mat-card ></mat-card><mat-card ></mat-card><p id="descricaosport">{{ descricaosport }}</p>
   
   <form>
   <mat-card-header  value="mat-card-header" /><mat-card-title  value="mat-card-title" /><mat-form-field  value="mat-form-field" /><mat-input  value="mat-input" /><mat-form-field  value="mat-form-field" /><mat-input  value="mat-input" /><mat-form-field  value="mat-form-field" /><mat-input  value="mat-input" /><mat-form-field  value="mat-form-field" /><mat-input  value="mat-input" />
	
	
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