import { Component, OnInit } from '@angular/core';
import { EventoService } from '../../shared/services/eventos.services';


import {Evento} from '../../shared/models/eventos.model'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers:[EventoService]
})
export class EventsComponent implements OnInit {
  
  public eventos: Evento[] = []

  constructor(private eventosService: EventoService) { }

  ngOnInit(): void {
    this.eventosService.getEventos().subscribe((eventos: Evento[]) => {
      this.eventos = eventos;
    });
  }
    
}


