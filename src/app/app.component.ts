import { Component,OnInit } from '@angular/core';
import { EmployeeService } from './fromserver.service';
import { EmployeeModel } from './employee-model';
import { ToserverService } from './toserver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EmployeeDataHandler';
 employee=new EmployeeModel(0,"","",0);
 
  
 public employeesdata:any=[];
 
 

  constructor(private _employeeService: EmployeeService,
              private _toserver:ToserverService
    ){
     
  }
  ngOnInit(){
    this._employeeService.getAllEmployees()
        .subscribe(data=>this.employeesdata=data.content) ; 
        
    
   
}  


    
onSubmit(){

this._toserver.saveemployee(this.employee).subscribe(

  data=>alert("Saved"),
  
  error => console.error('Error',error)
  

)
}

onUpdate(){
this._toserver.updateemployee(this.employee).subscribe(

  data=>alert("Updated"),
  
  error => console.error('Error',error)
  

)



}

onDelete(){

  this._toserver.deletemployee(this.employee).subscribe(

    data=>alert("Deleted"),
  
    error => console.error('Error',error)
    

  )
}



  }
  

