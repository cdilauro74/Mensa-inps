import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { DietComponent } from './diet.component';

@NgModule({
  imports: [
    CommonModule,    
  ],
  declarations: [
    DietComponent
  ],
  exports:[
    DietComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
