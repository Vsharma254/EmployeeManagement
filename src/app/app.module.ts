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
import { AddEmployeeComponent } from './employee/addEmployee.component';
import { AddEmployeeModule } from './employee/employee.module';
import { DepratmentSelectListComponent } from './plugin-component/department-select-component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { NavbarComponent } from './layout/navbar.component';
import { DeparmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { CanActiveGuardForRoute } from './guards/canActiveGuard';
import { UserService } from './shared/service/user.service';
import { SharedDirectiveModule } from './plugin-component/shared-directive-module';
import { MaterialModule } from '@angular/material';
import { EmployeePipe } from './employee/employee.pipe';
import 'hammerjs';

import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
const appRoutes: Routes = [{
  path: 'myapp', component: HomeComponent, children: [
    // { path: '', component: HeaderComponent, outlet: 'header' },
    // { path: '', component: FooterComponent, outlet: 'footer' },
    // { path: '', component: NavbarComponent, outlet: 'navbar' },
    { path: 'country', component: CountryComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'state', component: StateComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'department', component: DeparmentComponent, canActivate: [CanActiveGuardForRoute] }
   ,{ path: 'addemployee', component: AddEmployeeComponent, canActivate: [CanActiveGuardForRoute] }
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
    SharedDirectiveModule,
    // AddEmployeeModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    CountryComponent,
    StateComponent,
    AddEmployeeComponent,
    DeparmentComponent,
    DepratmentSelectListComponent,
    EmployeePipe
  ],
  bootstrap: [AppComponent],
  providers: [
    CanActiveGuardForRoute,
    UserService,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppModule { }

