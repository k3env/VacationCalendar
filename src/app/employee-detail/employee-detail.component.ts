import { Employee } from './../../models/employee';
import { formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee?: Employee;

  constructor(@Inject(LOCALE_ID) private locale: string) {}

  formatDate(value: Date, format: string): string {
    return formatDate(value, format, this.locale);
  }

  ngOnInit(): void {}
}
