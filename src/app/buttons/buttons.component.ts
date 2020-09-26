import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Employees } from '../_Models/employees';
import { ApiService } from '../_Services/api.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonsComponent implements OnInit {
  public salesUrl: string = "v1/orders/shipped";
  sales: Object[];
 

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.listSales();
  }


  listSales(){
    this.apiService.listSales(this.salesUrl).subscribe(
      response => {
        this.sales = response;
        console.log(this.sales);
      },(error) => {
        console.log(error);
      }
    )
  }

}
