import { AppModule } from './../app/app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVacation } from 'src/models/vacation';

@Injectable({
  providedIn: 'root',
})
export class VacationService {
  constructor(private http: HttpClient) {}

  // TODO: Add error handlers
  // TODO: Add all CRUD operations
  getVacations(employeeId?: number): Observable<IVacation[]> {
    return employeeId === undefined
      ? this.http.get<IVacation[]>(`${AppModule.baseUrl}/vacation`)
      : this.http.get<IVacation[]>(
          `${AppModule.baseUrl}/employee/${employeeId}/vacation`
        );
  }
  addVacation(payload: IVacation): Observable<IVacation> {
    return this.http.post<IVacation>(`${AppModule.baseUrl}/vacation`, payload);
  }
  updateVacation(payload: IVacation): Observable<IVacation> {
    return this.http.post<IVacation>(
      `${AppModule.baseUrl}/vacation/${payload.id}`,
      payload
    );
  }
  deleteVacation(id: number): Observable<null> {
    return this.http.delete<null>(`${AppModule.baseUrl}/vacation/${id}`);
  }
}
