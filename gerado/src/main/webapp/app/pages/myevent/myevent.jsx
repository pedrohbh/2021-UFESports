import React from 'react';
import ReactDOM from 'react-dom';

class myevent extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {event : new Object(), descricaosport : ""};		
	}

	
	unsubscrible(Object event) 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><h4 id="event.title">{{ event.title }}</h4><p id="event.location">{{ event.location }}</p><p id="event.maximumNumberOfParticipants">{{ event.maximumNumberOfParticipants }}</p><p id="event.currentlyEnrolled">{{ event.currentlyEnrolled }}</p><p id="event.dateOfTheEvent">{{ event.dateOfTheEvent }}</p><p id="descricaoesport">{{ descricaoesport }}</p>
	
	<button onClick="unsubscrible">unsubscrible</button>
	
	</div>
      );
    }
  }

}