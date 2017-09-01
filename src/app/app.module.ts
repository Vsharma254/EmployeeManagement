import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEmployeeComponent } from './employee/addEmployee/addEmployee.component';
import { EmployeeListComponent } from './employee/employeelist/employeelist.component';

import { AddEmployeeModule } from './employee/addEmployee/employee.module';
import { EmployeeListModule } from './employee/employeelist/employeelist.module';

import { DepratmentSelectListComponent } from './plugin-component/department-select-component';
import { DeparmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { CanActiveGuardForRoute } from './guards/canActiveGuard';
import { UserService } from './shared/service/user.service';
import { DepartmentService } from './shared/service/department.service';
import { SharedDirectiveModule } from './plugin-component/shared-directive-module';
import { EmployeePipe } from './employee/addEmployee/employee.pipe';

//Reducers
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { DepartmentEffect } from './effects/dept.effect';
import { DepartmentReducer } from './reducers/department.reducer';
import 'hammerjs';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
const appRoutes: Routes = [{
  path: 'myapp', component: HomeComponent, children: [
    { path: 'country', component: CountryComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'state', component: StateComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'department', component: DeparmentComponent, canActivate: [CanActiveGuardForRoute] }
    , { path: 'addemployee', component: AddEmployeeComponent, canActivate: [CanActiveGuardForRoute] }
    //,{ path: 'employeelist', component: EmployeeListComponent, canActivate: [CanActiveGuardForRoute] }
  ]
}, { path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
]

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
    BrowserModule,
    HttpModule,
    StoreModule.forRoot({
      DepartmentReducer
    }),
    StoreDevtoolsModule.instrument({ maxAge: 10 }),
    SharedDirectiveModule,
    EffectsModule.forRoot([DepartmentEffect]),
    // AddEmployeeModule,

    EmployeeListModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    CountryComponent,
    StateComponent,
    AddEmployeeComponent,
    DeparmentComponent,
    DepratmentSelectListComponent,
    EmployeePipe,
    EmployeeListComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    CanActiveGuardForRoute,
    UserService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },DepartmentService
  ]
})
export class AppModule { }

