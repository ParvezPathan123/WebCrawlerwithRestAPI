import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  client = {};

  constructor(private clientService: ClientService,private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    this.getClientDetailOne(this.route.snapshot.params['id']);
  }

  getClientDetailOne(id) {
    this.clientService.getClientById(id)
      .then((res) => {
        this.client = res;
      }, (err) => {
        console.log(err);
      });
  }

  updateClientDetails(id){
    this.clientService.updateExistingClientInfo(id, this.client) 
      .then((result) => {
         let id = result['_id'];
         this.router.navigate(['/ClientDetail/',id]);
      },(err) => {
        console.log(err);
      });
  }

}
