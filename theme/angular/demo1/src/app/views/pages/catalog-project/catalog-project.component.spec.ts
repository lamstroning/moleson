import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogProjectComponent } from './catalog-project.component';

describe('CatalogProjectComponent', () => {
  let component: CatalogProjectComponent;
  let fixture: ComponentFixture<CatalogProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
