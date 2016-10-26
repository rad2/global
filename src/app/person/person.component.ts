import { Component, OnInit } from '@angular/core';
import {Person} from './IPerson';
import {PersonService} from './person.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [
    PersonService
  ],
})
export class PersonComponent implements OnInit {
  private people:Person[];
  
  private card_format;
  private access_levels;
  private new_als={};
  private show;
  private activeperson: Person;
  private activecard;
  private item;
  private new_alvls=[];
  // accesslevel prop
  private alvl={};
  private al_name;
  private al_activationdate; 
  private al_expirationdate;
  private autoremove;
  private expired;
  // credentials prop
  private credentials={};
  private cardid;
  private hotstamp;
  private encoded;
  private status;
  private cardformat;
  private c_expirationdate;
  //person prop
  private person={};
  private fname;
  private lname;
  private mi;
  private p_activationdate;
  private p_expirationdate;
  private notes;
  private username;
  private password;


  constructor(private personservice:PersonService) { }
  
  selectPerson(p){
    console.log(p);
    this.activeperson = p;
  }
  selectCard(card){
    this.activecard = card;
  }
//getPerson data from the service
  getPerson(){
    this.personservice.getPerson().subscribe(data =>{
      this.people = data;
    });
  }
  //getCredentials from the service
  getCardFormat(){
    this.personservice.getCardFormat().subscribe(data =>{
      this.card_format = data;
      //console.log( this.card_format);
    });
  }
 // get Accesslevels from the servive 
 getAccessLevels(){
      this.personservice.getAccesslevels().subscribe(data =>{
      this.access_levels =data;
      });
  }

  //add selected als to an array
 add_als(item){
    this.new_als={
      al_name: item
    }  
    this.new_alvls.push(this.new_als);
  }
  
  assign_als(){
    let self= this;
   // console.log(this.new_alvls);
    this.new_alvls.forEach(function(als) {
       self.activeperson.accesslevel.push(als);
    });
   this.new_alvls=[];
  }
   
  remove_al(){
   console.log("remove");
  }
  //add credentials
  addCredential(newcard){
   this.credentials = {
      cardid: this.cardid,
      hotstamp: this.hotstamp,
      encoded: this.encoded,
      status:this.status,
      cardformat: this.cardformat,
      expirationdate: this.c_expirationdate
     }
     if(newcard.length > 0){
       this.activeperson.card.push(this.personservice.addCredential(newcard));
        this.show=false;
     } 
  }
  updatePerson(person){
    this.activeperson.fname = person.fname;
    this.activeperson.lname = person.lname;
    this.activeperson.notes = person.notes;
    this.activeperson.p_activationdate = person.p_activationdate;
    this.activeperson.p_expirationdate = person.p_expirationdate;
    
  }
  // Save person data
  savePerson(personObj,cardObj){
    
   this.updatePerson(personObj);
   this.addCredential(cardObj);
   this.assign_als();
  }
  
   revokeCard(cardid){
     //var choice=confirm("are you sure!");
     //if(choice){
      //delete this.activecard;
      console.log(cardid);
    // }else{
       return;
    // }
    // console.log(this.activeperson.card);
   }

  ngOnInit() {
    this.getPerson();
    this.getAccessLevels();
    this.getCardFormat();
  }

}
