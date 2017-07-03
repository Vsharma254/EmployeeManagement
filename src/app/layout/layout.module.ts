import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
@NgModule({
    exports: [HeaderComponent, FooterComponent, NavbarComponent],
    declarations: [Router]
})
export class LayoutModule {

}