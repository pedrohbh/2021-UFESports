import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventHasStudentService } from '../../shared/services/eventHasStudent.service';

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.scss']
})
export class MyeventComponent implements OnInit {

  public events: any[] = [];
  studentId: number;

  constructor(private eventHasStudentService :EventHasStudentService,
    private cookieService: CookieService) { }

  ngOnInit(): void {
    this.studentId = parseFloat(this.cookieService.get('studentId'));
    this.listEvents();
  }

  async listEvents(){
    const events = await this.eventHasStudentService.findAll(this.studentId);
    this.events = events[0];
  }

  async unsubscrible(event){
    try {
      await this.eventHasStudentService.unsubscrible(this.studentId, event.id);
      alert("Cancelamos sua inscrição conforme solicitado!");
      const index = this.events.find(myevent => myevent.id == event.id);
      this.events.splice(index, 1);
    } catch (error) {
      console.log(error);
      alert(error.error.title + error.error.message);
    }
  }

}
