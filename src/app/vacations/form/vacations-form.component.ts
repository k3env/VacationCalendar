import { VacationService } from 'src/services/vacation.service';
import { Employee } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';
import { IVacation, Vacation } from 'src/models/vacation';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface IDict {
  [index: string]: string;
}

type MVacation = {
  id?: number;
  employeeId: number;
  duration: number;
  start: string;
};

@Component({
  selector: 'app-vacations-form',
  templateUrl: './vacations-form.component.html',
  styleUrls: ['./vacations-form.component.scss'],
})
export class VacationsFormComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private vacationService: VacationService,
    private fb: FormBuilder
  ) {}

  get modalId(): string {
    return this.model.id !== undefined
      ? `modal-edit-${this.model.id}`
      : 'modal-new';
  }
  get modalHeader(): string {
    return this.model.id !== undefined ? 'Edit vacation' : 'New vacation';
  }
  get submitClass(): string {
    return this.model.id !== undefined ? 'btn-success' : 'btn-primary';
  }
  get submitText(): string {
    return this.model.id !== undefined ? 'Update' : 'Add';
  }

  employees: Employee[] = [];

  emptyEmployee: Employee = {
    id: 0,
    name: '',
    color: '',
  };

  @Input() isNew: boolean = true;
  @Input() model: IVacation = {
    duration: 0,
    employee: this.emptyEmployee,
    start: Number(new Date()),
    employee_id: this.emptyEmployee.id,
  };

  vacationForm = this.fb.group({
    id: [0],
    employeeId: [this.model.employee.id],
    duration: [this.model.duration],
    start: [this.datefmt(new Date(this.model.start))],
  });

  datefmt(date: Date): string {
    let str = date
      .toLocaleDateString('ru', {
        year: 'numeric',
        day: '2-digit',
        month: '2-digit',
      })
      .split('.')
      .reverse()
      .join('-');
    return str;
  }

  modelToInterface(model: MVacation): IVacation {
    let e: Employee =
      this.employees.find((e) => e.id === Number(model.employeeId)) ??
      this.emptyEmployee;
    let v: Vacation = new Vacation({
      id: model.id,
      start: Number(new Date(model.start)),
      duration: model.duration,
      employee: e,
      employee_id: e.id,
    });
    return v.interface;
  }

  interfaceToModel(i: IVacation): MVacation {
    return {
      id: i.id,
      employeeId: i.employee !== undefined ? i.employee.id : 0,
      duration: i.duration,
      start: this.datefmt(new Date(i.start)),
    };
  }

  ngOnInit(): void {
    this.employeeService
      .getEmployees()
      .subscribe((employees) => (this.employees = employees));
    console.log(this.model);
    this.vacationForm.patchValue(this.interfaceToModel(this.model));
  }

  onSubmit(): void {
    if (this.model.id !== undefined) {
      this.vacationService
        .updateVacation(this.modelToInterface(this.vacationForm.value))
        .subscribe(() => {
          location.reload();
        });
    } else {
      this.vacationService
        .addVacation(this.modelToInterface(this.vacationForm.value))
        .subscribe(() => {
          location.reload();
        });
    }
  }
}
