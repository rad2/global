import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing,appRoutingProviders }  from './app.routing';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { NetboxesComponent } from './netboxes/netboxes.component';
import { PersonComponent } from './person/person.component';
import { PersonService} from './person/person.service';
import { PersonSearchComponent } from './person/person-search.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    NetboxesComponent,
    PersonComponent,
    PersonSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    PersonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
