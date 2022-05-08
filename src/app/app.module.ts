import { VacationsItemComponent } from './vacations/details/item/component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from 'src/app/employees/list/employees.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailComponent } from './employees/details/employee-detail.component';
import { EmployeeFormComponent } from './employees/form/employee-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VacationsDetailComponent } from './vacations/details/vacations-detail.component';
import { VacationsFormComponent } from './vacations/form/vacations-form.component';
import { VacationsListComponent } from './vacations/list/vacations-list.component';
import { ComponentListComponent } from './component-list/component-list.component';

import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDayComponent } from './components/calendar/day/component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeDetailComponent,
    NavigationComponent,
    EmployeeFormComponent,
    VacationsListComponent,
    VacationsDetailComponent,
    VacationsFormComponent,
    ComponentListComponent,
    CalendarComponent,
    CalendarDayComponent,
    VacationsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  public static get baseUrl(): string {
    return 'https://x8ki-letl-twmt.n7.xano.io/api:2DztJhNM';
  }
}
