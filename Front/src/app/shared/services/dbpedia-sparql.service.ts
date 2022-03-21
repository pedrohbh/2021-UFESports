import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlParamEncodingService } from './url-param-encoding.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbpediaSparqlService {

  constructor(private http: HttpClient, private urlParamEncodingService: UrlParamEncodingService) { }

  /**
   * get SparQL DBPedia Results
   * */

  nomeesporte(id:string): string {
    let valor:string;
    valor="Baseball" // vai ser valor padrao, por enquantoo, mas mudar depois
    if(id=="5"){
      valor = "Basketball";
    }
    if(id=="4"){
      valor = "Baseball";
    }
    if (id=="16" ){
       valor ="Footvolley"
    }
    if(id=="20"){
      valor = "American_handball";
    }
    if(id=="19"){
      valor = "Golf";
    }
    if (id=="18" ){
       valor ="Artistic_gymnastics"
   }
   if(id=="42"){
     valor = "Beach_volleyball";
   }
   if(id=="6"){
     valor = "Boxing";
   }
   if (id=="3" ){
      valor ="Badminton"
   }
   if (id=="2" ){
    valor ="Sport_of_athletics"
   }
   if (id=="27" ){
    valor ="Swimming_(sport)"
   }
   if (id == "8" ){
    valor ="Capoeira"
  } 
  if (id == "13" ){
    valor ="Football"
   }
  if (id=="17" ){
     valor ="Futsal"
  }
  if (id=="41" ){
    valor ="Volleyball"
  }
    
     return valor;
  }
  public getSparQL(query: string): Observable<any> {
    return this.http.get<any>(
      'https://dbpedia.org/sparql',
      {
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