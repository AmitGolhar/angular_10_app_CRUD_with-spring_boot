import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { EmployeesService } from '../app/employees.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public UserData: any;
  public SingleUserData: any;

  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService.getAllEmployees().subscribe((data) => {
      this.UserData = data;
    });
  }
  addEmployee(empData) {
    this.employeesService.createEmployee(empData).subscribe((data) => {
      this.employeesService.getAllEmployees().subscribe((data) => {
        this.UserData = data;
      });
    });
  }
  getByID(id) {
    this.employeesService.getEmployeesById(id).subscribe((data) => {
      this.SingleUserData =  data ;
    });
  }
  deleteEmployee(id){
    this.employeesService.deleteEmployee(id).subscribe((data => {
      this.employeesService.getAllEmployees().subscribe((data) => {
        this.UserData = data;
      });
    }))
  }
}
