import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from '../_Services/api.service';
import { BestSellers } from '../_Models/bestSellers';
import { BestProductSold } from '../_Models/bestProductSold';

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
  public bestProductSoldUrl: string = "v1/orders/products/best";
  public employeesNumber: number;
  public salesMoney: any;
  public ordersNumber: number;
  public ordersShippedNumber: number;
  public bestSellerNumber:number;
   
  data:any;

  constructor(private apiService: ApiService) { }
   bestSellerList: BestSellers[];
   productSold: BestProductSold[];
   labels: string[] = [];
   dataCount= [];
   mylabels = ['PNY VCQM6000-24GB-PB','Intel Xeon E5-2687W V4','AMD 100-505989'];
   
   myproductSold = new BestProductSold();
  ngOnInit() {
    this.salesAmount();
    this.employeesCount();
    this.ordersCount();
    this.ordersShippedCount();
    this.bestSeller();
    this.bestProductSold();

    
  
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

  bestProductSold(){
    this.apiService.bestProductSold(this.bestProductSoldUrl).subscribe(
      response => {
        this.productSold = response;
        this.getTwoDistincList(this.productSold);
      },(error) => {
        console.log(error);
      }
    )
  }

  getTwoDistincList( myproductSold: BestProductSold[]){
    
    for( let product of  myproductSold){
       this.labels.push(product.product_name);
       this.dataCount.push(product.sales);

    }

    console.log(this.labels);
    console.log("yoyo");
    console.log(this.mylabels);
    // console.log(this.dataCount);
    this.data = {
      labels: this.labels,
      datasets: [
          {
              data: this.dataCount,
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

}
