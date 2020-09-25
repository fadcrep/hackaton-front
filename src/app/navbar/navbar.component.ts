import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../_Services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public salesUrl: string = "v1/employees/sales";
   public salesMoney: number;

  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector('.sidebar-offcanvas').classList.add('active');
    }
    else {
      document.querySelector('.sidebar-offcanvas').classList.remove('active');
    }
  }
  constructor(config: NgbDropdownConfig,
              private apiService: ApiService) {
    config.placement = 'bottom-right';
  }
  ngOnInit() {
    this.salesAmount();
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

}
