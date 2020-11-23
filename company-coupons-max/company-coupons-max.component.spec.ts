import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyCouponsMaxComponent } from './company-coupons-max.component';

describe('CompanyCouponsMaxComponent', () => {
  let component: CompanyCouponsMaxComponent;
  let fixture: ComponentFixture<CompanyCouponsMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyCouponsMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyCouponsMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
