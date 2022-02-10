import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { EventoService } from '../../shared/services/eventos.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers:[EventoService]
})
export class EventsComponent implements OnInit {

  admin: boolean = false;

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.admin = this.stringToBoolean(this.cookieService.get('admin'));
  }

  stringToBoolean(string: string): boolean {
    if(string ==='true'){
      return true;
    }
    return false;
  }

}
