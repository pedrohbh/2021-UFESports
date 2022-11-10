import React from 'react';
import ReactDOM from 'react-dom';

class student extends React.Component
{
	constructor(props)
	{
		super(props);		
		this.state = {students : []};		
	}

	
	deleteStudent(String id) 
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
			</table><mat-icon ></mat-icon><p id="student.user.name">{{ student.user.name }}</p><p id="student.user.email">{{ student.user.email }}</p><p id="student.registration">{{ student.registration }}</p><p id="student.telephone">{{ student.telephone }}</p>
	
	<button onClick="deleteStudent">deleteStudent</button>
	
	</div>
      );
    }
  }

}