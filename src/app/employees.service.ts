import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  API_ENDPOINT = 'http://localhost:8080/';

    httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    })
  };

// Access-Control-Allow-Origin
  constructor(private http: HttpClient) {}

  getAllEmployees() {
    return this.http.get(this.API_ENDPOINT + 'employee');
  }

  getEmployeesById(id) {
    console.log(this.API_ENDPOINT + 'employee/' + id)
    return this.http.get(this.API_ENDPOINT + 'employee/' + id);
  }

  createEmployee(userData) {
 
    return this.http.post(this.API_ENDPOINT + 'employee',userData );
  }
 
  deleteEmployee(id) {
    return this.http.delete(this.API_ENDPOINT + 'employee/' + id);
  }
}
