import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent implements OnInit {
  private menuOpened: boolean = false;
  @Input() class: string = '';
  items = [
    { caption: 'Employees', routerLink: '/employees' },
    { caption: 'Vacations', routerLink: '/vacations' },
  ];
  constructor() {}

  ngOnInit(): void {}

  get menuState(): string {
    return this.menuOpened ? '' : 'hidden';
  }
  get menuButtonState(): string {
    return this.menuOpened ? 'fa-x' : 'fa-bars';
  }

  closeMenu(): void {
    this.menuOpened = false;
  }

  toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }
}
