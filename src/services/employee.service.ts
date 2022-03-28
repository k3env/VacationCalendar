import { MOCK_EMPLOYEE_LIST } from 'src/mockups/employees';
import { Employee } from 'src/models/employee';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getEmployees(): Observable<Employee[]> {
    return of(MOCK_EMPLOYEE_LIST);
  }
}
