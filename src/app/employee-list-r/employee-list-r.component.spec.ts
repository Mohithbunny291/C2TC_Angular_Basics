import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeListRComponent } from './employee-list-r.component';

describe('EmployeeListRComponent', () => {
  let component: EmployeeListRComponent;
  let fixture: ComponentFixture<EmployeeListRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeListRComponent]
    });
    fixture = TestBed.createComponent(EmployeeListRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
