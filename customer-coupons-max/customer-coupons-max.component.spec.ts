import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCouponsMaxComponent } from './customer-coupons-max.component';

describe('CustomerCouponsMaxComponent', () => {
  let component: CustomerCouponsMaxComponent;
  let fixture: ComponentFixture<CustomerCouponsMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCouponsMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCouponsMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
