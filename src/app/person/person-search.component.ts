import { Component, OnInit } from '@angular/core';
import {PersonService} from './person.service';

@Component({
  selector: 'app-person-search',
  templateUrl: './person-search.component.html',
  styleUrls: ['./person-search.component.css'],
  providers:[
    PersonService
  ]
})
export class PersonSearchComponent implements OnInit {
  private people=[];
  constructor(private personservice: PersonService) { }
  
  searchPerson(){
   this.personservice.getPerson().subscribe(data =>{
     console.log(data);
      this.people = data;
      });
   }


  ngOnInit() { }

}
