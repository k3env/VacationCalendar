import { AppModule } from 'src/app/app.module';
import { Employee } from 'src/models/employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${AppModule.baseUrl}/employee`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${AppModule.baseUrl}/employee/${id}`);
  }
}
