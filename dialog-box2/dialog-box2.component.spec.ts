import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBox2Component } from './dialog-box2.component';

describe('DialogBox2Component', () => {
  let component: DialogBox2Component;
  let fixture: ComponentFixture<DialogBox2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogBox2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
