import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentListRComponent } from './department-list-r.component';

describe('DepartmentListRComponent', () => {
  let component: DepartmentListRComponent;
  let fixture: ComponentFixture<DepartmentListRComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentListRComponent]
    });
    fixture = TestBed.createComponent(DepartmentListRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
