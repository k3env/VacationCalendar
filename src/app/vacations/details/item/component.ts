import { Component, OnInit, Input } from '@angular/core';
import { Vacation } from 'src/models/vacation';

@Component({
  selector: 'app-vacation-item',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class VacationsItemComponent implements OnInit {
  ngOnInit(): void {}
  @Input() item: Vacation = new Vacation();
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
