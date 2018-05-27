import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ClientService {


  constructor(private http: Http) { }

  getAllClients() {
    console.log("Getting All the Books from server ! ");
    return new Promise((resolve, reject) => {
      this.http.get('/clients')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getClientById(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/clients/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }

  AddNewClientInfo(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/clients', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  updateExistingClientInfo(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/clients/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    });
  }

  deleteExistingClient(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/clients/'+id)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        });
    })
  }
}
