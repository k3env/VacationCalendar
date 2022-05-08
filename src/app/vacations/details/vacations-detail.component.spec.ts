import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationsDetailComponent } from './vacations-detail.component';

describe('VacationsDetailComponent', () => {
  let component: VacationsDetailComponent;
  let fixture: ComponentFixture<VacationsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacationsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VacationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
