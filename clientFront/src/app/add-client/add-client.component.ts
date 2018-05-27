import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client ={};

  constructor(private clientService: ClientService,private router: Router) { }

  ngOnInit() {
  }

  addNewClientInfo(){
    this.clientService.AddNewClientInfo(this.client)
      .then((result) => {
        let id=result['_id'];
        this.router.navigate(['/ClientDetail',id]);
      }, (err) => {
        console.log(err);
      });
  }

}
