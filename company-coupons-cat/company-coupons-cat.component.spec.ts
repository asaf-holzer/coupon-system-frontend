import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCouponsCatComponent } from './company-coupons-cat.component';

describe('CompanyCouponsCatComponent', () => {
  let component: CompanyCouponsCatComponent;
  let fixture: ComponentFixture<CompanyCouponsCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCouponsCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCouponsCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
