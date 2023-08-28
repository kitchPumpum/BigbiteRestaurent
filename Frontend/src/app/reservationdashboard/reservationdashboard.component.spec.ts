import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationdashboardComponent } from './reservationdashboard.component';

describe('ReservationdashboardComponent', () => {
  let component: ReservationdashboardComponent;
  let fixture: ComponentFixture<ReservationdashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReservationdashboardComponent]
    });
    fixture = TestBed.createComponent(ReservationdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
