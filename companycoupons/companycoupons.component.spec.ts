import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanycouponsComponent } from './companycoupons.component';

describe('CompanycouponsComponent', () => {
  let component: CompanycouponsComponent;
  let fixture: ComponentFixture<CompanycouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanycouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanycouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
