import React from 'react';
import ReactDOM from 'react-dom';

class createevent extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {descricaosport : ""};		
	}

	
	onSubmit() 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><mat-card ></mat-card><mat-card ></mat-card><p id="descricaosport">{{ descricaosport }}</p>
   
   <form>
   <External Component id="mat-card-header" value={{ this.state.mat-card-header }} />
		<External Component id="mat-card-title" value={{ this.state.mat-card-title }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		<External Component id="mat-form-field" value={{ this.state.mat-form-field }} />
		<External Component id="mat-input" value={{ this.state.mat-input }} />
		
	
	
	<button onClick="onSubmit">onSubmit</button>
	
	</form></div>
      );
    }
  }

}