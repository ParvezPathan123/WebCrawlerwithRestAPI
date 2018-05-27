import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  clients: any;

  constructor(private clientService: ClientService) { }

  ngOnInit() {  
    this.getClientList();
  }

  getClientList(){
    this.clientService.getAllClients()
     .then((res) => {
      this.clients = res;
     }, (err) => {
       console.log(err);
     });
  }

}
