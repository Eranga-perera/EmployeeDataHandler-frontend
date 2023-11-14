import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import{MatTableModule}from '@angular/material/table';

const Material=[MatButtonModule,MatTableModule];


@NgModule({
  
  
  imports: [ Material
    
  ],
  exports:[ Material


  ]
})
export class MaterialModule { }
