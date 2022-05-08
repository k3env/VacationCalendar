import { DataModel, Day } from 'src/models/Day';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

type SelectionMode = 'none' | 'single' | 'multi';

@Component({
  selector: 'tw-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  selectMode: SelectionMode = 'none';

  prevousSelectIndex: number = -1;
  selectedYear: number = new Date().getFullYear();
  selectedMonth: number = new Date().getMonth();
  selectedDay?: Day | Day[];

  @Input()
  data?: DataModel[];

  private _updateData?: DataModel[];

  days: Day[] = new Array<Day>(42);
  constructor() {
    this.days = new Array<Day>(42);
    for (let index = 0; index < this.days.length; index++) {
      this.days[index] = new Day();
    }
  }

  @Input()
  ngDoCheck(): void {
    this.drawCalendar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._updateData = changes['data'].currentValue as DataModel[];
    this.ngOnInit();
  }

  ngOnInit(): void {
    switch (this.selectMode) {
      case 'multi':
        this.selectedDay = [];
        break;
      case 'single':
        this.selectedDay = undefined;
        break;
      default:
        break;
    }
    this.drawCalendar();
  }

  drawCalendar(): void {
    let dayOfWeek = new Date(this.selectedYear, this.selectedMonth, 0).getDay();
    dayOfWeek = dayOfWeek < 0 ? dayOfWeek + 7 : dayOfWeek;
    let startDate = new Date(
      this.selectedYear,
      this.selectedMonth,
      1 - dayOfWeek
    );

    for (let index = 0; index < 42; index++) {
      let currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + index);

      this.days[index].date = currentDate;
      this.days[index].isInactive =
        this.days[index].date.getMonth() !== this.selectedMonth;
      let _dm = this._updateData?.find(
        (v) => this.days[index].date.toDateString() === v.date.toDateString()
      );
      this.days[index].content = _dm?.content ?? [];
      this.days[index].refs = _dm?.refs ?? [];
    }
  }

  onSelect(day: Day) {
    if (this.selectMode !== 'none') {
      let currentSelectIndex = this.days.findIndex((d) => d === day);
      day.isSelected = !day.isSelected;
      if (this.selectMode === 'single') {
        if (
          this.prevousSelectIndex !== -1 &&
          this.prevousSelectIndex !== currentSelectIndex
        ) {
          this.days[this.prevousSelectIndex].isSelected = false;
        }
        this.prevousSelectIndex = currentSelectIndex;
        this.selectedDay = day.isSelected ? day : undefined;
      }
      if (this.selectMode === 'multi') {
        if (day.isSelected) {
          (this.selectedDay as Day[]).push(day);
        } else {
          this.selectedDay = (this.selectedDay as Day[]).filter(
            (d) => d !== day
          );
        }
        this.selectedDay = (this.selectedDay as Day[]).sort((a, b) =>
          a.date > b.date ? 1 : -1
        );
      }
    }
  }

  get showedDate(): string {
    return new Date(this.selectedYear, this.selectedMonth).toLocaleString(
      'ru',
      {
        month: 'long',
        year: 'numeric',
      }
    );
  }

  incrementMonth(): void {
    this.selectedMonth++;
    this.onMonthChange();
  }
  decrementMonth(): void {
    this.selectedMonth--;
    this.onMonthChange();
  }

  private onMonthChange(): void {
    switch (this.selectedMonth) {
      case 12:
        this.selectedMonth = 0;
        this.selectedYear++;
        break;
      case -1:
        this.selectedMonth = 11;
        this.selectedYear--;
        break;
    }

    this.selectedDay = this.selectMode === 'multi' ? [] : undefined;

    this.days.map((d) => (d.isSelected = false));

    this.prevousSelectIndex = -1;
    this.drawCalendar();
  }
}
