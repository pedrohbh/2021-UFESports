import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sport',
  template: `<table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table><p id="sport.name">{{ sport.name }}</p><mat-icon ></mat-icon>
   
   <form>
   <External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="matInput" value={{ this.state.matInput }} />
		<External Component id="mat-hint" value={{ this.state.mat-hint }} />
		
	
	
	<button (click)="save">save</button>
	
	<button (click)="cancelNewSport">cancelNewSport</button>
	
	</form>`
})
export class sport implements OnInit
{this.state = {sports : [];
		constructor() { }

  ngOnInit(): void 
  {
  }
	save() : void 
	{
		//TODO To be implemented
	}
    
	handleNewSport() : void 
	{
		//TODO To be implemented
	}
    
	cancelNewSport() : void 
	{
		//TODO To be implemented
	}
    
	deleteSport(String id) : void 
	{
		//TODO To be implemented
	}
    
}