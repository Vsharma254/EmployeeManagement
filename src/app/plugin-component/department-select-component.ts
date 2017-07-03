import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DepartmentService } from '../shared/service/department.service';
import { Department } from '../shared/model/department';

@Component({
    selector: 'dept-selector-list',
    template: `<md-select id="departmentSelect" name="departmentList" (change)="Selectonchange()" placeholder="Select Department" [(ngModel)]="selectedDepartment">
                        <md-option *ngFor="let dept of departmentList" [value]="dept">{{dept.deptName}}</md-option>
                    </md-select>
                    <ng-content> </ng-content>`,                
    providers: [DepartmentService]
})
export class DepratmentSelectListComponent implements OnInit {
    public departmentList: Department[];
    public selectedDepartment: Department;
    @Output() myEvent: EventEmitter<Department> = new EventEmitter<Department>();
    constructor(private deptSer: DepartmentService)
    { }
    ngOnInit() {
        this.deptSer.getDepartments().subscribe((resp) => {
            this.departmentList = resp;
        });
    }
    Selectonchange() {
        this.myEvent.emit(this.selectedDepartment)
    }
}



