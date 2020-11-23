import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCouponsCatComponent } from './customer-coupons-cat.component';

describe('CustomerCouponsCatComponent', () => {
  let component: CustomerCouponsCatComponent;
  let fixture: ComponentFixture<CustomerCouponsCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCouponsCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCouponsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
