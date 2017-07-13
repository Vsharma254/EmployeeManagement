import { Component, OnInit, Output, Inject, Input, Pipe } from '@angular/core';
import { Employee, eClass } from '../../shared/model/employee';
import { Department } from '../../shared/model/department';
import { EmployeeService } from '../../shared/service/employee.service';
import { DepartmentService } from '../../shared/service/department.service';
import { DepratmentSelectListComponent } from '../../plugin-component/department-select-component';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { EmployeePipe } from './employee.pipe';
@Component(
    {
        selector: 'list-employee',
        templateUrl: './employeelist.component.html',
        providers: [DepartmentService, EmployeeService]
    })
export class EmployeeListComponent implements OnInit {
    public employee: Employee;
    public employeeList: Employee[];
    constructor(
        private employeeSer: EmployeeService,
       ) {
        this.initAll();
        
    }
    private initAll() {
        this.employee = {
            empID: 0,
            empName: '',
            empDepartmentID: 0,
            empMobileNumber: null,
            empEmail: '',
            empActiveStatus: true,
            empDeleteStatus: false,
            empCreateDate: new Date(),
            empUpdateDate: new Date(),
            empJoiningDate: null,
            empDetails: '',
            empDesignation: ''
        };
    }
    loadEmployeeList() {
        this.employeeSer.getEmplyees().subscribe(res => {
            this.employeeList = res;
        });
    }
    ngOnInit() {
        this.loadEmployeeList();
    }
}