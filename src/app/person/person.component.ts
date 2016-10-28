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
  
  private card_format=[];
  private access_levels;
  private new_als={};
  private show;
  private activeperson: Person;
  private activecard;
  private item;
  private new_alvls=[];
  // accesslevel prop
  private activepersonaccesslevel=[];
  private activepersonaccesscard=[];
  private alvl=[];
  
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
    //assign the selected Person Object to activeperson
    this.activeperson = p;
   //Clean the arrays after person selection
     this.activepersonaccesslevel=[];
     this.activepersonaccesscard=[]; 

   // Create a new PersonAccessLevel object that has the Als names
    this.activeperson.PersonAccessLevels.forEach(obj =>{
      this.alvl.forEach(obj2 =>{
        console.log("Obj: "+obj);
        
          if(obj2.AccessLevelId === obj.AccessLevelId){
            console.log("Obj2: "+obj2.AccessLevelId);
            console.log("Person2Al: "+obj.AccessLevelId);
              console.log(obj2.Name);
             //this.activepersonaccesslevel.push({"Name":obj2.Name,"ActivationDate":obj.ActivationDate,"ExpirationDate":obj.ExpirationDate,"AutoRemove":obj.AutoRemove,"Expired":obj.Expired});
             obj.Name = obj2.Name;
            }
      });
      });
    //Create a new personAccesscard that has CardFromat names
     this.activeperson.PersonAccessCards.forEach(obj =>{
       this.card_format.forEach(obj2 => {
         if(obj2.CardFormatId === obj.CardFormatId){
            //this.activepersonaccesscard.push({"CardFormatName":obj2.Name,"HotStamp":})
            obj.CardFormatName = obj2.Name;
         }
       });
 
     });  
   
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
      this.alvl=this.getActivePersonAccesslevel(data);
      });
  }
 getActivePersonAccesslevel(obj){
    return obj;
 }
  //add selected als to an array
 add_als(id,item){
    this.new_als={
      al_accesslevelid: id,
      al_name: item
    }  
    this.new_alvls.push(this.new_als);
  }
  
  assign_als(){
    let self= this;
   // console.log(this.new_alvls);
    this.new_alvls.forEach(function(als) {
       self.activeperson.PersonAccessLevels.push(als);
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
       this.activeperson.PersonAccessCards.push(this.personservice.addCredential(newcard));
        this.show=false;
     } 
  }
  updatePerson(person){
    this.activeperson.FirstName = person.fname;
    this.activeperson.LastName= person.lname;
    this.activeperson.Notes = person.notes;
    this.activeperson.ActivationDate= person.p_activationdate;
    this.activeperson.ExpirationDate = person.p_expirationdate;
    
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
