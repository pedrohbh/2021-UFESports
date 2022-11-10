import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'student',
  template: `<table>
				<tr>
					<th>{{ table }}</th>
				</tr>
				<tr>
					<td>{{ table }}</td>
				</tr>
			</table><mat-icon ></mat-icon><p id="student.user.name">{{ student.user.name }}</p><p id="student.user.email">{{ student.user.email }}</p><p id="student.registration">{{ student.registration }}</p><p id="student.telephone">{{ student.telephone }}</p>
	
	<button (click)="deleteStudent">deleteStudent</button>
	
	`
})
export class student implements OnInit
{this.state = {students : [];
		constructor() { }

  ngOnInit(): void 
  {
  }
	deleteStudent(String id) : void 
	{
		//TODO To be implemented
	}
    
}