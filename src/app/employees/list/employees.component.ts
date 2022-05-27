import { Employee } from 'src/models/employee';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { EmployeeService } from 'src/services/employee.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(
    private employeeService: EmployeeService,
    private location: Location,
    private router: Router,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  getEmployees(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employeeList = employees));
  }

  ngOnInit(): void {
    this.getEmployees();
  }
  onDelete(id: number): void {
    this.employeeService
      .deleteEmployee(id as number)
      .subscribe((r) => window.location.reload());
  }
}
