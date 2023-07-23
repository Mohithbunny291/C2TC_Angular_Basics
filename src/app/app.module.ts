import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { EmployeeListRComponent } from './employee-list-r/employee-list-r.component';
import { DepartmentListRComponent } from './department-list-r/department-list-r.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    EmployeeListRComponent,
    DepartmentListRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
