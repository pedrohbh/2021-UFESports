import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'myevent',
  template: `<h4 id="event.title">{{ event.title }}</h4><p id="event.location">{{ event.location }}</p><p id="event.maximumNumberOfParticipants">{{ event.maximumNumberOfParticipants }}</p><p id="event.currentlyEnrolled">{{ event.currentlyEnrolled }}</p><p id="event.dateOfTheEvent">{{ event.dateOfTheEvent }}</p><p id="descricaoesport">{{ descricaoesport }}</p>
	
	<button (click)="unsubscrible">unsubscrible</button>
	
	`
})
export class myevent implements OnInit
{this.state = {event : new Object();
		descricaosport : "";
		constructor() { }

  ngOnInit(): void 
  {
  }
	unsubscrible(Object event) : void 
	{
		//TODO To be implemented
	}
    
}