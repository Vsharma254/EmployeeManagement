import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employeeList.component';
import { CanActiveGuardForRoute } from '../../guards/canActiveGuard';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import { HomeComponent } from '../../home/home.component';
import { EmployeePipe } from './employee.pipe';

const _routes: Routes = [
  { path: 'myapp', component: HomeComponent, children: [  {
        path: 'employeelist',
        component: EmployeeListComponent,
        canActivate: [CanActiveGuardForRoute]
   }]
  }
]

@NgModule(
    {
        imports: [BrowserModule, RouterModule.forChild(_routes),
        FormsModule,
         ReactiveFormsModule],
        declarations: [EmployeeListComponent, EmployeePipe],
        exports: [RouterModule, EmployeePipe] 
    })
export class EmployeeListModule {

} 