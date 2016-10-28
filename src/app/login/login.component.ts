import { Component, OnInit} from '@angular/core';
import {Router, Params} from '@angular/router';
import {Person} from '../person/IPerson';
import {PersonService} from '../person/person.service';

/*export class User{
  id: number;
  username: string;
  password:string
}*/


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    PersonService
  ],
})
export class LoginComponent implements OnInit {
  public msg: string;
  private users;
  fullname: string;
  constructor(private _router: Router,private _personservice: PersonService) { }
  
 
  data={id:1,"username":'global',"password":'global',"FirstName":"Rad","LastName":"Drissi"};
  loggedperson;

 login(logininfo):string{

    //this._personservice.getPerson().subscribe(data =>{ 
      
      //this.users = data
    //for(let user of this.users){
        //if( user.User.Username === logininfo.username && user.User.Password === logininfo.password){
         if( this.data.username === logininfo.username && this.data.password === logininfo.password){ 
          //this._router.navigate(['/person', this.fullname]);
          this._router.navigate(['/person']);
          return this.fullname = this.data.FirstName +'_'+ this.data.LastName;
        }else{
         this.msg = "Invalid Credentials";
         return;
        }
     }
    //});
 // }
  
  
  ngOnInit() {
  }

}
