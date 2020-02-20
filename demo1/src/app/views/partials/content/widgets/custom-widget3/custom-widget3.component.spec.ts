import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomWidget3Component } from './custom-widget3.component';

describe('CustomWidget3Component', () => {
  let component: CustomWidget3Component;
  let fixture: ComponentFixture<CustomWidget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomWidget3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomWidget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
