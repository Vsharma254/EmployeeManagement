import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './addEmployee.component';
import { CanActiveGuardForRoute } from '../../guards/canActiveGuard';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

const _routes: Routes = [
    {
        path: 'myapp/addemployee',
        component: AddEmployeeComponent,
        canActivate: [CanActiveGuardForRoute]
    }]
@NgModule(
    {
        imports: [RouterModule.forChild(_routes),FormsModule, ReactiveFormsModule],
        declarations: [AddEmployeeComponent],
        exports: [RouterModule] 
    })
export class AddEmployeeModule {

} 