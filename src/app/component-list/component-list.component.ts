import { Employee } from 'src/models/employee';
import { Vacation } from 'src/models/vacation';
import { Component, Input, OnInit } from '@angular/core';
import { ChipType, DataModel } from 'src/models/Day';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})
export class ComponentListComponent implements OnInit {
  isVisible: boolean = false;
  vacations: DataModel[] = [];
  vData: Vacation[];
  employees: Employee[] = [];
  constructor() {
    this.vData = [];
  }

  log(e: Event): void {
    console.log(e);
  }
  get display(): string {
    return this.isVisible ? 'block' : 'none';
  }

  show(): void {
    console.log('test');
  }
  hide(): void {}

  ngOnInit(): void {
    const empl1: Employee = {
      id: 1,
      name: 'Test',
      color: '#abcdef',
    };
    const empl2: Employee = {
      id: 2,
      name: 'Vasya',
      color: '#fedcba',
    };
    const empl3: Employee = {
      id: 3,
      name: 'Jenya',
      color: '#ff0000',
    };
    let v1: Vacation = new Vacation({
      employee: empl1,
      start: Number(new Date(2022, 4, 20)),
      duration: 14,
      employee_id: empl1.id,
    });
    let v2: Vacation = new Vacation({
      employee: empl1,
      start: Number(new Date(2022, 4, 10)),
      duration: 7,
      employee_id: empl1.id,
    });
    let v3: Vacation = new Vacation({
      employee: empl2,
      start: Number(new Date(2022, 4, 14)),
      duration: 7,
      employee_id: empl2.id,
    });
    let v4: Vacation = new Vacation({
      employee: empl3,
      start: Number(new Date(2022, 4, 4)),
      duration: 21,
      employee_id: empl3.id,
    });
    let v5: Vacation = new Vacation({
      employee: empl2,
      start: Number(new Date(2022, 4, 1)),
      duration: 24,
      employee_id: empl2.id,
    });

    this.employees.push(empl1, empl2);
    this.vData.push(v1, v2, v3, v4, v5);
    this.updateContent();
  }

  updateContent(): void {
    for (let v of this.vData) {
      for (let dm of v.calendarContent) {
        let _vId = this.vacations.findIndex(
          (__dm) => __dm.date.toDateString() === dm.date.toDateString()
        );
        if (_vId === -1) {
          this.vacations.push(dm);
        } else {
          this.vacations[_vId].content = this.vacations[_vId].content.concat(
            dm.content
          );
          this.vacations[_vId].refs = this.vacations[_vId].refs.concat(dm.refs);
        }
      }
    }
  }

  colorClasses: string[] = [
    '',
    'btn-primary',
    'btn-secondary',
    'btn-accent',
    'btn-info',
    'btn-success',
    'btn-warning',
    'btn-error',
  ];
}
