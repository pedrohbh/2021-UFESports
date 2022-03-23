import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';
import { UrlParamEncodingService } from './url-param-encoding.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class DbpediaSparqlService {

  constructor(private http: HttpClient, private urlParamEncodingService: UrlParamEncodingService) { }

  /**
   * get SparQL DBPedia Results
   * */
  nomeSport:Array<string>=[];
  indice:number;
  nomeesporte(id:string): string {
   
   this.nomeSport = ["Archery", "Sport_of_athletics","Badminton","Baseball","Basketball","Boxing","Tug_of_war","Capoeira","CrossFit","Draughts","Domino(card_game)","Fencing","Association_football","American_football","Beach_soccer","Footvolley","Futsal","Artistic_gymnastics", "Golf","American_handball","Brazilian_jiu-jitsu", 
   "Judo","Kickboxing", "Javelin_throw","Hammer_throw", "Powerlifting", "Swimming", "Paintball","Peteca", "Water_polo", "Arm_wrestling", "Dodgeball", "Rugby_football", "High_jump", "Long_jump","Snooker","Slacklining", "Sumo","Tennis", "Table_tennis","Dodgeball","Beach_volleyball", "Chess"]
    
   this.indice = parseInt(id)-1;
   return this.nomeSport[this.indice];

  }

  public getSparQL(query: string): Observable<any> {
    return this.http.get<any>(
         'https://dbpedia.org/sparql',      
      {
          headers: new HttpHeaders({'Content-type': 'application/json'}),
          params: new HttpParams({
          fromObject: {
          "default-graph-uri": "http://dbpedia.org",
          "query": query,
          "format": "application/sparql-results+json",
          "CXML_redir_for_subjs": "121",
          "CXML_redir_for_hrefs": "",
          "timeout": "30000",
          "debug": "on",
          "run": "Run Query",
          },
          encoder: this.urlParamEncodingService
      })
    })
  }
}