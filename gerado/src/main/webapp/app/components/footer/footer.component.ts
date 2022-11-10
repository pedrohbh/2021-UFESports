import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  template: `<mat-toolbar ></mat-toolbar><mat-toolbar-row ></mat-toolbar-row><footer ></footer>`
})
export class footer implements OnInit
{constructor() { }

  ngOnInit(): void 
  {
  }
}