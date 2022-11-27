import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {


  //here 'employees' is the public variable
  employees: Employee [] = [];

  constructor(private employessService : EmployeesService) { }

  ngOnInit(): void {
    this.employessService.getAllEmployees()
    .subscribe({
      next:(employees) => {
        //console.log(this.employees);
        this.employees = employees;
      },
      error:(Response) =>{
        console.log(Response);
      }
    });
  }

}
