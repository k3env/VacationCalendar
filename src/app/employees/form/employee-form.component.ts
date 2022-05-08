import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/models/employee';
import { EmployeeService } from 'src/services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  id: number = 0;
  model: Employee = {
    id: this.id,
    color: '#dddddd',
    name: '',
  };

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    @Inject(LOCALE_ID) private locale: string
  ) {
    console.log(locale);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.id = Number(id);
      this.employeeService
        .getEmployee(this.id)
        .subscribe((e) => (this.model = e));
    }
  }
  goBack(): void {
    this.location.back();
  }
  onSubmit(): void {
    if (this.id === 0) {
      this.employeeService
        .addEmployee(this.model)
        .subscribe((e) => location.assign(`employee/${e.id}`));
    } else {
      this.employeeService
        .updateEmployee(this.model)
        .subscribe((e) => location.assign(`employee/${e.id}`));
    }
  }
}
