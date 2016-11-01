import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from './IPerson';

//import {PEOPLE} from '../data/person'


@Injectable()
export class PersonService {

private people:Person[];
private person_url ='app/data/people.json';
private cf_url = 'app/data/cardformats.json';
private al_url = 'app/data/accesslevels.json';

  constructor(private http: Http) { }

  getPerson(): Observable<Person[]>{
    //return PEOPLE;
    return this.http.get(this.person_url)
                     .map(this.extractData)
                     //.catch(this.handleError);
                  
  }
  
  
  getCardFormat(): Observable<any[]>{
    return this.http.get(this.cf_url)
                     .map(this.extractData);
  }
 getAccesslevels(): Observable<any[]>{
    return this.http.get(this.al_url)
                     .map(this.extractData);
  }
 
  extractData(res: Response){
      let data = res.json();
      return data;
  }

  handleError(){

  }

  /*savePerson(newCard){
     return newCard;
   }*/

  addCredential(newCard){
     return newCard;
  }
}
