import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule} from '@angular/router';

import { MenuListComponent } from './menu-list.component';
import { DishDetailComponent } from './dish-detail.component';
import { DishDetailGuard } from './dish-detail.guard';
import { DishService } from './dish.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [   
    HttpClientModule,
    RouterModule.forChild([
      {path:'menu', component: MenuListComponent},
      {path:'menu/:id',component: DishDetailComponent, canActivate:[DishDetailGuard] },
    ]),
    SharedModule
  ],
  declarations: [
    MenuListComponent,         
    DishDetailComponent, 
  ],
  providers: [DishService, DishDetailGuard]
})
export class MenuModule { }
