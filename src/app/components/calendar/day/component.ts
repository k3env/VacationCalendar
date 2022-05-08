import { Day } from 'src/models/Day';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tw-calendar-day',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class CalendarDayComponent implements OnInit {
  @Input() day?: Day;
  ngOnInit(): void {}
}
