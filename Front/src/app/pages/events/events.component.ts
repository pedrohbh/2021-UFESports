import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../shared/services/eventos.services';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers:[EventoService]
})
export class EventsComponent implements OnInit {
  




  ngOnInit(): void {
   
  }
    
}