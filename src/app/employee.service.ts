import { Injectable } from '@angular/core';

export interface Employee {
  name: string;
  phone: string;
  salary: number;
  bonus: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : Employee[] = [];

  constructor() { }
  
  addEmployee(employee : Employee) {
    if (employee.salary > 1000) {
      employee.bonus = 0;
    }

    const copy = Object.assign( {}, employee);
    this.employees.push(copy);
  }
}