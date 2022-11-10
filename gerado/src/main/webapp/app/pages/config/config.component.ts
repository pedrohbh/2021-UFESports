import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'config',
  template: `
	<student />
	
	<sport />
	`
})
export class config implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
}