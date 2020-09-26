import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpHeaders, HttpBackend } from '@angular/common/http';
import { retry, catchError, map } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import { Observable, throwError } from 'rxjs';
import { BestSellers } from '../_Models/bestSellers';
import { BestProductSold } from '../_Models/bestProductSold';
import { Employees } from '../_Models/employees';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient,
    private injector: Injector
  ) { }

  private utilsService = this.injector.get(UtilsService);
  private baseURL = this.utilsService.getApiUrl();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  salesAmount(endUrl: string): Observable<number> {
    return this.httpClient.get<number>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  employeesNumber(endUrl: string): Observable<number> {
    return this.httpClient.get<number>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  ordersCount(endUrl: string): Observable<number> {
    return this.httpClient.get<number>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  ordersShippedCount(endUrl: string): Observable<number> {
    return this.httpClient.get<number>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  bestSellers(endUrl: string): Observable<BestSellers[]> {
    return this.httpClient.get<BestSellers[]>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  bestProductSold(endUrl: string): Observable<BestProductSold[]> {
    return this.httpClient.get<BestProductSold[]>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  listEmployees(endUrl: string): Observable<Employees[]> {
    return this.httpClient.get<Employees[]>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }

  listSales(endUrl: string): Observable<Object[]> {
    return this.httpClient.get<Object[]>(this.baseURL + endUrl, this.httpOptions)
      .pipe(
        retry(3),
        catchError(this.errorHandl)
      )
  }
 


  errorHandl(error) {
    let errorMessage = '';
    let errorStatus = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      errorStatus = error.status;
    }
    console.log(errorMessage);
    return throwError(errorStatus);
  }


}
