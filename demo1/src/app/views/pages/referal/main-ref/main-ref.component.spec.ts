import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainRefComponent } from './main-ref.component';

describe('MainRefComponent', () => {
  let component: MainRefComponent;
  let fixture: ComponentFixture<MainRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
