import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AddClientComponent } from './add-client/add-client.component';

const routes: Routes = [
  {path:'',redirectTo:'HomeClients',pathMatch: 'full'},
  {path: 'HomeClients',component: HomeComponent },
  {path: 'ClientDetail/:id',component: ClientdetailComponent},
  {path: 'ClientEdit/:id',component: ClientEditComponent},
  {path: 'addClient',component: AddClientComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide: LocationStrategy, useClass: HashLocationStrategy
  }]
})
export class AppRoutingModule { }
