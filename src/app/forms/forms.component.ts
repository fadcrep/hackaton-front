import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../_Services/api.service';
import { Employees } from '../_Models/employees';



@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public EmployeesUrl: string = "v1/employees";
  employees: Employees[];
 

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.getEmployees();
  }


  getEmployees(){
    this.apiService.listEmployees(this.EmployeesUrl).subscribe(
      response => {
        this.employees = response;
        console.log(this.employees);
      },(error) => {
        console.log(error);
      }
    )
  }
}
