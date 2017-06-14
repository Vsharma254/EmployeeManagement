import { Component, OnInit, Output, Inject, Input } from '@angular/core';
import { Employee } from '../shared/model/employee';
import { Department } from '../shared/model/department';
import { DepartmentService } from '../shared/service/department.service';
import { DepratmentSelectListComponent } from '../plugin-component/department-select-component';

@Component(
    {
        selector: 'add-employee',
        templateUrl: './addEmployee.component.html',
        providers: [DepartmentService]
    })
export class AddEmployeeComponent implements OnInit {
    public employee: Employee;
    public departmentList: Department[];
    public selectedDepartment: Department;

    constructor(private deptSer: DepartmentService) {
        this.initAll();
    }
    public localEvent(anyKoi:Department) {
        this.selectedDepartment = anyKoi;
    }
    private initAll() {
        this.employee = {
            employeeName: '',
            employeeDepartment: { deptID: 0, deptName: '' },
            employeeEmail: '',
            employeeNumber: '',
            EmployeeState: 0
        };
    }
    public addNewEmployee() {

    }
    ngOnInit() {
        this.deptSer.getDepartments().subscribe((resp) => {
            this.departmentList = resp;
        });
    }
}