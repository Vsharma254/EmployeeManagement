import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule } from '@angular2-material/icon';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdIconRegistry } from '@angular2-material/icon';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEmployeeComponent } from './employee/addEmployee.component';
import { DepratmentSelectListComponent } from './plugin-component/department-select-component';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { NavbarComponent } from './layout/navbar.component';
import { DeparmentComponent } from './department/department.component';
import { CanActiveGuardForRoute } from './guards/canActiveGuard';
import { UserService } from './shared/service/user.service';
import { MaterialModule } from '@angular/material';
import { MdListModule } from '@angular2-material/list';
import {SharedDirectiveModule} from './plugin-component/shared-directive-module';
import 'hammerjs';
import {
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';
const appRoutes: Routes = [{
  path: 'myapp', children: [
    { path: '', component: HeaderComponent, outlet: 'header' },
    { path: '', component: FooterComponent, outlet: 'footer' },
    { path: '', component: NavbarComponent, outlet: 'navbar' },

    { path: 'country', component: CountryComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'state', component: StateComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'department', component: DeparmentComponent, canActivate: [CanActiveGuardForRoute] },
    { path: 'addemployee', component: AddEmployeeComponent, canActivate: [CanActiveGuardForRoute] }
  ]
}, { path: 'login', component: LoginComponent },
{ path: 'register', component: RegistrationComponent },
]

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule,
    MaterialModule,SharedDirectiveModule
  ],
  declarations: [AppComponent, LoginComponent,
    RegistrationComponent, HeaderComponent,
    NavbarComponent, FooterComponent,
    CountryComponent, StateComponent,
    DeparmentComponent, AddEmployeeComponent, DepratmentSelectListComponent],
  bootstrap: [AppComponent],
  providers: [
    CanActiveGuardForRoute,
    UserService,
    MdIconRegistry,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ]
})
export class AppModule { }

