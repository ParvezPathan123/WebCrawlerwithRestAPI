import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientService } from './client.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientdetailComponent } from './clientdetail/clientdetail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientdetailComponent,
    ClientEditComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpModule,FormsModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
