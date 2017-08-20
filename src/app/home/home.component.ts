import { Component, OnInit, ViewChild, DoCheck, OnChanges, KeyValueDiffers } from '@angular/core';
import { DepartmentService } from '../shared/service/department.service';
import { Department } from '../shared/model/department';
import { SharedDirectiveModule } from '../plugin-component/shared-directive-module'
import { SetActiveInactiveDirective } from '../plugin-component/setActiveInactive-directive'
import { Router } from '@angular/router';
@Component({
    selector: 'home-selector',
    templateUrl: 'home.component.html',
    styleUrls: ["./home.component.css"],
    providers: [DepartmentService]
})

export class HomeComponent implements OnInit {
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