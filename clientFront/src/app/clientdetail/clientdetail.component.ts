import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clientdetail',
  templateUrl: './clientdetail.component.html',
  styleUrls: ['./clientdetail.component.css']
})
export class ClientdetailComponent implements OnInit {

  client = {};

  constructor(private clientService: ClientService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    this.getClientDetail(this.route.snapshot.params['id']);
  }

  getClientDetail(id) {
    this.clientService.getClientById(id)
      .then((res) => {
        this.client = res;
      }, (err) => {
        console.log(err);
      });
  }

  deleteClientInfo(id){
    this.clientService.deleteExistingClient(id)
      .then((res) => {
        this.router.navigate(['/HomeClients']);
      }, (err) => {
        console.log(err);
      });
  }

}
