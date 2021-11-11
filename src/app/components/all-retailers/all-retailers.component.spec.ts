import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRetailersComponent } from './all-retailers.component';

describe('AllRetailersComponent', () => {
  let component: AllRetailersComponent;
  let fixture: ComponentFixture<AllRetailersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRetailersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRetailersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
