import { Vacation } from 'src/models/vacation';
export type ChipType = {
  name: string;
  color: string;
};

export class Day {
  date: Date = new Date();
  get isToday(): boolean {
    return this.date.toDateString() === new Date().toDateString();
  }
  isSelected: boolean = false;
  isInactive: boolean = false;
  get class(): string[] {
    return [
      this.isToday ? 'today' : '',
      this.isSelected ? 'selected' : '',
      this.isInactive ? 'inactive' : '',
    ].filter((v) => v !== '');
  }
  get view(): string {
    return this.date.toLocaleDateString('ru', {
      day: '2-digit',
      month: '2-digit',
    });
  }

  content: ChipType[] = [];
  refs: Vacation[] = [];
}

export type DataModel = {
  date: Date;
  content: ChipType[];
  refs: Vacation[];
};
