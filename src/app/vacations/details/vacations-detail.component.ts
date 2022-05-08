import { VacationService } from 'src/services/vacation.service';
import { Employee } from 'src/models/employee';
import { Component, Input, OnInit } from '@angular/core';
import { Vacation, IVacation } from 'src/models/vacation';

@Component({
  selector: 'app-vacations-detail',
  templateUrl: './vacations-detail.component.html',
  styleUrls: ['./vacations-detail.component.scss'],
})
export class VacationsDetailComponent implements OnInit {
  @Input() vacations: Vacation[] = [];
  constructor(private vacationService: VacationService) {}

  emptyEmployee: Employee = {
    id: -1,
    name: '',
    color: '',
  };
  newVacation: IVacation = {
    duration: 0,
    employee: this.emptyEmployee,
    start: Number(new Date()),
    employee_id: this.emptyEmployee.id,
  };

  onDeleteConfirm(id: number): void {
    this.vacationService.deleteVacation(id).subscribe(() => {
      location.reload();
    });
  }

  ngOnInit(): void {}

  datefmt(d: Date | number) {
    if (typeof d === 'number') {
      return new Date(d).toLocaleString('ru', { dateStyle: 'short' });
    } else {
      return new Date(d as unknown as number).toLocaleString('ru', {
        dateStyle: 'short',
      });
    }
  }
}
