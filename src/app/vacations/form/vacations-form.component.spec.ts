import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsFormComponent } from './vacations-form.component';

describe('VacationsFormComponent', () => {
  let component: VacationsFormComponent;
  let fixture: ComponentFixture<VacationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
