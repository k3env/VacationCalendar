import { VacationsListComponent } from './vacations/list/vacations-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './employees/details/employee-detail.component';
import { EmployeeFormComponent } from './employees/form/employee-form.component';
import { EmployeesComponent } from './employees/list/employees.component';
import { ComponentListComponent } from './component-list/component-list.component';

const routes: Routes = [
  {
    path: 'employee/:id',
    component: EmployeeDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'employee/:id/edit',
    component: EmployeeFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'employees/new',
    component: EmployeeFormComponent,
    pathMatch: 'full',
  },
  { path: 'employees', component: EmployeesComponent, pathMatch: 'full' },
  { path: 'vacations', component: VacationsListComponent, pathMatch: 'full' },
  { path: 'components', component: ComponentListComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
