import { DataModel } from 'src/models/Day';
import { Employee } from './employee';

export interface IVacation {
  id?: number;
  created_at?: Date;
  start: number;
  duration: number;
  employee: Employee;
  employee_id: number;
}

export class Vacation {
  private static counter: number = 1;
  get end(): Date {
    let endDate: Date = new Date(this.start);
    endDate.setDate(endDate.getDate() + this.duration - 1);
    return endDate;
  }
  constructor(object?: IVacation) {
    this.id = object?.id;
    this.created_at = object?.created_at;
    this.start = new Date(object?.start ?? 0) ?? new Date();
    this.duration = object?.duration ?? 0;
    this.employee = object?.employee ?? { id: 0, name: '', color: '' };
    this.start;
  }
  id?: number;
  created_at?: Date;
  start: Date;
  duration: number;
  employee: Employee;
  get calendarContent(): DataModel[] {
    let __dm: DataModel[] = [];
    for (let d = 0; d < this.duration; d++) {
      let cDate = new Date(this.start);
      cDate.setDate(cDate.getDate() + d);
      __dm.push({
        date: cDate,
        content: [{ name: this.employee.name, color: this.employee.color }],
        refs: [this],
      });
    }
    return __dm;
  }

  get interface(): IVacation {
    return {
      id: this.id,
      created_at: this.created_at,
      start: Number(this.start),
      duration: this.duration,
      employee: this.employee,
      employee_id: this.employee.id,
    };
  }
}
