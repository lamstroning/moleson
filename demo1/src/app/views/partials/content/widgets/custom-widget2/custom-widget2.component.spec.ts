import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWidget2Component } from './custom-widget2.component';

describe('CustomWidget2Component', () => {
  let component: CustomWidget2Component;
  let fixture: ComponentFixture<CustomWidget2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWidget2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWidget2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
