import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListRComponent } from './department-list-r/department-list-r.component';
import { EmployeeListRComponent } from './employee-list-r/employee-list-r.component';

const routes: Routes = [
  {path: 'departments', component: DepartmentListRComponent},
  {path: 'employees', component: EmployeeListRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents: any = { DepartmentListRComponent, EmployeeListRComponent }