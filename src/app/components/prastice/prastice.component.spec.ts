import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasticeComponent } from './prastice.component';

describe('PrasticeComponent', () => {
  let component: PrasticeComponent;
  let fixture: ComponentFixture<PrasticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrasticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrasticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
