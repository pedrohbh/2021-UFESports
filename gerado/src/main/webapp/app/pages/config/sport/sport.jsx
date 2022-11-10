import React from 'react';
import ReactDOM from 'react-dom';

class sport extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {sports : []};		
	}

	
	save() 
	{
		//TODO To be implemented
	}
	
	handleNewSport() 
	{
		//TODO To be implemented
	}
	
	cancelNewSport() 
	{
		//TODO To be implemented
	}
	
	deleteSport(String id) 
	{
		//TODO To be implemented
	}
	
	
	render() {  
      return (
        <div><table>
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
		
	
	
	<button onClick="save">save</button>
	
	<button onClick="cancelNewSport">cancelNewSport</button>
	
	</form></div>
      );
    }
  }

}