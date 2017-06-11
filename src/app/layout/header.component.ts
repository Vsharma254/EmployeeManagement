import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header-tag',
    templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
    public checkUserAvailable: boolean = false;
    constructor(private _Router: Router) {
    }
    ngOnInit() {
        if (localStorage.getItem('currentUser') != null) {
            this.checkUserAvailable = true;
        }   
    }
    public logout() {
        // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
        this._Router.navigate(['/login']);
    }
}