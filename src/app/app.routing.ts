import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { NetboxesComponent } from './netboxes/netboxes.component';
import { PersonSearchComponent } from './person/person-search.component';

export const appRoutes: Routes = [
  { path: 'person', component: PersonComponent },
  { path: 'person/:fullname', component: PersonComponent },
  { path: 'partition', component: NetboxesComponent},
  { path: 'searchperson', component: PersonSearchComponent},
  { path: '', component: LoginComponent }
  
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);