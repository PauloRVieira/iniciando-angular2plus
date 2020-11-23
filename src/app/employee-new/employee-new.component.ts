import { Component, OnInit } from '@angular/core';
import  { Employee, EmployeeService } from '../employee.service';
 
@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    phone: '',
    salary: 0,
    bonus: 0,
  };
  
  constructor(private employeeService : EmployeeService)  {

   }

  ngOnInit(): void {
  }

  addEmployee(event: any) {
    this.employeeService.addEmployee(this.employee);
  }

  hasBonus() {
    return this.employee.salary < 1000;
  }

}
