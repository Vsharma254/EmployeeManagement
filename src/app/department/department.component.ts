import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../shared/service/department.service';
import { Department } from '../shared/model/department';

@Component({
    selector: 'dept-selector',
    templateUrl: 'department.component.html',
    styleUrls: ["./department.component.css"], providers: [DepartmentService]
})

export class DeparmentComponent implements OnInit {
    public dept: Department = { deptID: 0, deptName: '' };
    public _deptList: Department[] = [];
    constructor(private _DepartmentService: DepartmentService) {

    }
    private getDeprtmentList() {
        this._DepartmentService.getDepartments().subscribe(resp => {
            this._deptList = resp;
        });
    }
    public clrearControls() {
        this.dept = { deptID: 0, deptName: '' };
    }
    public addNewDepartment() {
        if (this.dept.deptName == "") {
            alert("Please enter department name");
            return;
        }
        this._DepartmentService.addDepartment(this.dept).subscribe(re => {
            alert('New department is added successfully!!');
            this.getDeprtmentList();
            this.clrearControls();
        });

    }
    ngOnInit() { this.getDeprtmentList(); }
}