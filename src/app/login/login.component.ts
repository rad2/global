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
  
 
  //data:User={id:1,"username":'',"password":''};
  loggedperson;

  login(logininfo){
    this._personservice.getPerson().subscribe(data =>{ 
      
      this.users = data
    for(let user of this.users){
        if( user.username === logininfo.username && user.password === logininfo.password){
          //this._router.navigate(['/person', this.fullname]);
          this._router.navigate(['/person']);
          return this.fullname = user.fname +'_'+ user.lname;
        }else{
         this.msg = "Invalid Credentials";
         return false;
        }
     }
    });
  }
  
  ngOnInit() {
  }

}
