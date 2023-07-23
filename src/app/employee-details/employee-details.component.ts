import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit{
  
  // public employees!: { id: number; name: string; collage: string; }[];
  public employees: any;
  errmsg: any;
  constructor(private _employeeService: EmployeeService){}

  ngOnInit() {
    this._employeeService.getEmployees().subscribe(data => this.employees = data, 
                                                    error => this.errmsg = error);
  }

  
}
