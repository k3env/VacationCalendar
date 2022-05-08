import { Employee } from 'src/models/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  employeeList: Employee[] = [];
  selectedEmployee?: Employee;

  onSelect(employee: Employee) {
    this.selectedEmployee = employee;
  }

  isListEmpty(): boolean {
    return this.employeeList.length === 0;
  }

  constructor(private employeeService: EmployeeService) {}

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employeeList = employees));
  }

  ngOnInit(): void {
    this.getEmployees();
  }
}
