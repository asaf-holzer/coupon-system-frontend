import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercouponsComponent } from './customercoupons.component';

describe('CustomercouponsComponent', () => {
  let component: CustomercouponsComponent;
  let fixture: ComponentFixture<CustomercouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomercouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomercouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
