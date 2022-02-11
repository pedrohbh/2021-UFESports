import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../shared/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  students = [];

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.listStudent();
  }

  async listStudent() {
    const students = await this.studentService.findAll(1,10);
    this.students = students[0];
  }

  async deleteStudent(id) {
    try {
      await this.studentService.delete(id);
      alert("Excluimos o estudente conforme solicitado!");
      const index = this.students.find(student => student.id == id);
      this.students.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
