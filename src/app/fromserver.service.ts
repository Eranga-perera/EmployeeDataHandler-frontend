import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs';
import { IEmployee } from './employee';
import { EmployeeModel } from './employee-model';

@Injectable()
export class EmployeeService  {
 
 private _url: string ="http://localhost:8080/api/v1/employee/getAllEmployees";
 
 
 constructor(private http:HttpClient) { }

  getAllEmployees():Observable<IEmployee>{
  return this.http.get<IEmployee>(this._url);
 }
 
}
  
  

