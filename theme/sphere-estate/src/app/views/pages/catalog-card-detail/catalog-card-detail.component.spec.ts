import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCardDetailComponent } from './catalog-card-detail.component';

describe('CatalogCardDetailComponent', () => {
  let component: CatalogCardDetailComponent;
  let fixture: ComponentFixture<CatalogCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogCardDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
