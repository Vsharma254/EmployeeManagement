import { Component, OnInit, ViewChild, DoCheck, OnChanges, KeyValueDiffers } from '@angular/core';
import { DepartmentService } from '../shared/service/department.service';
import { Department } from '../shared/model/department';
import { SharedDirectiveModule } from '../plugin-component/shared-directive-module'
import { SetActiveInactiveDirective } from '../plugin-component/setActiveInactive-directive'

@Component({
    selector: 'home-selector',
    templateUrl: 'home.component.html',
    styleUrls: ["./home.component.css"],
    providers: [DepartmentService]
})

export class HomeComponent implements OnInit {
    constructor() {
        
    }
    ngOnInit() { }
}