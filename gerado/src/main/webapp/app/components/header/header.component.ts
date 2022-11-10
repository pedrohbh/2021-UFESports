import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  template: `<header ></header><mat-toolbar ></mat-toolbar><mat-icon ></mat-icon>
	
	<button (click)="thankYou">thankYou</button>
	
	`
})
export class header implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
	thankYou() : void 
	{
		//TODO To be implemented
	}
    
}