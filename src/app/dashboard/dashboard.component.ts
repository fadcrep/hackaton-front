import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from '../_Services/api.service';
import { BestSellers } from '../_Models/bestSellers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public salesUrl: string = "v1/employees/sales";
  public EmployeesUrl: string = "v1/employees/count";
  public ordersUrl: string = "v1/orders/count";
  public ordersShippedUrl: string = "v1/orders/shipped/count";
  public bestSellerUrl: string = "v1/employees/best";
  public employeesNumber: number;
  public salesMoney: number;
  public ordersNumber: number;
  public ordersShippedNumber: number;
  public bestSellerNumber:number;
  data:any;

  constructor(private apiService: ApiService) { }
   bestSellerList: BestSellers[];
  ngOnInit() {
    this.salesAmount();
    this.employeesCount();
    this.ordersCount();
    this.ordersShippedCount();
    this.bestSeller();


    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]    
      };
  
}
  


  salesAmount(){
    this.apiService.salesAmount(this.salesUrl).subscribe(
      response => {
        this.salesMoney = response;
      },(error) => {
        console.log(error);
      }
    )
  }

  employeesCount(){
    this.apiService.employeesNumber(this.EmployeesUrl).subscribe(
      response => {
        this.employeesNumber = response;
      },(error) => {
        console.log(error);
      }
    )
  }

  ordersCount(){
    this.apiService.ordersCount(this.ordersUrl).subscribe(
      response => {
        this.ordersNumber = response;
      },(error) => {
        console.log(error);
      }
    )
  }

  ordersShippedCount(){
    this.apiService.ordersShippedCount(this.ordersShippedUrl).subscribe(
      response => {
        this.ordersShippedNumber = response;
      },(error) => {
        console.log(error);
      }
    )
  }

  bestSeller(){
    this.apiService.bestSellers(this.bestSellerUrl).subscribe(
      response => {
        this.bestSellerList = response;
      },(error) => {
        console.log(error);
      }
    )
  }

}
