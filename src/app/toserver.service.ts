import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from './employee-model';
@Injectable({
  providedIn: 'root'
})
export class ToserverService {
___url='http://localhost:8080/api/v1/employee/deleteEmployeeData'
__url='http://localhost:8080/api/v1/employee/updateEmployeeData'
_url='http://localhost:8080/api/v1/employee/SaveEmployee';
  constructor(private _http:HttpClient) { }

  saveemployee(Emp:EmployeeModel){

   return this._http.post<any>(this._url,Emp);

  }
  updateemployee(Emp:EmployeeModel){

   return this._http.put<any>(this.__url,Emp);

  }

 deletemployee(Emp:EmployeeModel){

  return this._http.delete<any>(this.___url+'/'+Emp.employeeID)

 }

 
}
