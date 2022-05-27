import { AppModule } from 'src/app/app.module';
import { Employee } from 'src/models/employee';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VacationService } from './vacation.service';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(
    private http: HttpClient,
    private vacationsService: VacationService
  ) {}

  // TODO: Add error handlers
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${AppModule.baseUrl}/employee`);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${AppModule.baseUrl}/employee/${id}`);
  }

  addEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${AppModule.baseUrl}/employee`, payload);
  }

  updateEmployee(payload: Employee): Observable<Employee> {
    return this.http.post<Employee>(
      `${AppModule.baseUrl}/employee/${payload.id}`,
      payload
    );
  }
  deleteEmployee(id: number): Observable<null> {
    // Some workaround for Xano, who dont know how to delete employee without vacations
    this.vacationsService.getVacations(id).subscribe(vs => {
      for (let v of vs) {
        this.vacationsService.deleteVacation(v.id as number).subscribe();
      }
    })
    return this.http.delete<null>(`${AppModule.baseUrl}/employee/${id}`);
  }
}
