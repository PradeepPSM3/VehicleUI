import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleManagentComponent } from './vehicle-managent.component';

describe('VehicleManagentComponent', () => {
  let component: VehicleManagentComponent;
  let fixture: ComponentFixture<VehicleManagentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleManagentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleManagentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
