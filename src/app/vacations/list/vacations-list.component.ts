import { VacationService } from 'src/services/vacation.service';
import {
  Component,
  ComponentRef,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  ViewChild,
} from '@angular/core';
import { formatDate } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/models/employee';
import { Location } from '@angular/common';
import { DataModel, Day } from 'src/models/Day';
import { CalendarComponent } from 'src/app/components/calendar/calendar.component';
import { Vacation } from 'src/models/vacation';

@Component({
  selector: 'app-vacations-list',
  templateUrl: './vacations-list.component.html',
  styleUrls: ['./vacations-list.component.scss'],
})
export class VacationsListComponent implements OnInit {
  vacations: DataModel[] = [];
  @Input() employee?: Employee;

  vData: Vacation[];

  @ViewChild('calendar') calendar?: CalendarComponent;

  constructor(
    private route: ActivatedRoute,
    private vacationService: VacationService,
    private location: Location,
    @Inject(LOCALE_ID) private locale: string
  ) {
    this.vData = [];
  }

  get selection(): Day | undefined {
    return this.calendar?.selectedDay as Day;
  }
  get dayVacations(): Vacation[] {
    return (this.selection?.refs as Vacation[]) ?? [];
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.vacationService.getVacations(this.employee?.id).subscribe((vs) => {
      this.vData = vs.map((v) => new Vacation(v));
      this.updateContent();
    });
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
}
