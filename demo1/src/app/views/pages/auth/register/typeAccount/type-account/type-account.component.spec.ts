import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAccountComponent } from './type-account.component';

describe('TypeAccountComponent', () => {
  let component: TypeAccountComponent;
  let fixture: ComponentFixture<TypeAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
