import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefaccountComponent } from './chefaccount.component';

describe('ChefaccountComponent', () => {
  let component: ChefaccountComponent;
  let fixture: ComponentFixture<ChefaccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChefaccountComponent]
    });
    fixture = TestBed.createComponent(ChefaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
