import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventHasStudentService } from '../../shared/services/eventHasStudent.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { DbpediaSparqlService } from 'src/app/shared/services/dbpedia-sparql.service'

@Component({
  selector: 'app-myevent',
  templateUrl: './myevent.component.html',
  styleUrls: ['./myevent.component.scss']
})
export class MyeventComponent implements OnInit {

  public events: any[] = [];
  studentId: number;
  sportname: Array<string> =  ['', ''];
  descricaoesport: Array<string> =  ['', ''];

  constructor(private eventHasStudentService :EventHasStudentService,
    private cookieService: CookieService,private dbpediaSparqlService: DbpediaSparqlService) { }

  ngOnInit(): void {
    this.studentId = parseFloat(this.cookieService.get('studentId'));
    this.listEvents();


   
  }

  async listEvents(){
    const events = await this.eventHasStudentService.findAll(this.studentId);
    this.events = events[0];
    for (let i = 0; i < this.events.length; i++) {
        this.sportname[i] = this.dbpediaSparqlService.nomeesporte(this.events[i].sport.id);
        //console.log(this.sportname[i]);
      this.dbpediaSparqlService.getSparQL("SELECT ?member WHERE { dbr:"+ this.sportname[i] + " dbo:abstract ?member  .FILTER (lang(?member) = 'en')}"
      ).subscribe((products) => {
        this.descricaoesport[i] = products.results.bindings[0].member.value;
        //console.log( this.descricaoesport[i]);
    });
    
    }
    
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
