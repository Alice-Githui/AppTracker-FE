import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPotentialsComponent } from './all-potentials.component';

describe('AllPotentialsComponent', () => {
  let component: AllPotentialsComponent;
  let fixture: ComponentFixture<AllPotentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPotentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPotentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
