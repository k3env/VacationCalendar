import { EmployeeService } from 'src/services/employee.service';
import { Employee } from 'src/models/employee';
import { formatDate } from '@angular/common';
import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Vacation } from 'src/models/vacation';
import { VacationService } from 'src/services/vacation.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss'],
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee?: Employee;
  vacations: Vacation[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private vacationService: VacationService,
    private location: Location,
    private router: Router,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  formatDate(value: Date | undefined, format: string): string {
    const date = value === undefined ? new Date() : value;
    return formatDate(date, format, this.locale);
  }

  goBack(): void {
    this.location.back();
  }
  onDelete(): void {
    this.employeeService
      .deleteEmployee(this.employee?.id as number)
      .subscribe((r) => this.router.navigate(['employees']));
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployee(id).subscribe((e) => {
      this.employee = e;
      this.vacationService
        .getVacations(this.employee?.id)
        .subscribe((vs) => (this.vacations = vs.map((v) => new Vacation(v))));
    });
  }
}
