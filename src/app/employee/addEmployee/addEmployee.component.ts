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
        selector: 'add-employee',
        templateUrl: './addEmployee.component.html',
        providers: [DepartmentService, EmployeeService],
        styleUrls: ["../../department/department.component.css"]
    })
export class AddEmployeeComponent implements OnInit {
    public employee: Employee;
    public departmentList: Department[];
    public employeeList: Employee[];
    public selectedDepartment: Department;
    public fg: FormGroup;
    public testAPi:string;
    public mergmapobje :any;
    constructor(private deptSer: DepartmentService,
        private employeeSer: EmployeeService,
        private _fr: FormBuilder) {
        this.initAll();
        
    }
    public localEvent(anyKoi: Department) {
        this.selectedDepartment = anyKoi;
        this.fg.value.empDepartmentID = this.selectedDepartment.deptID;
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
    public addNewEmployee(locFG: FormGroup) {
        //if (locFG.valid) {    
        let allValues = <Employee>this.fg.value;
        this.employeeSer.addEmployee(allValues).subscribe(res => {
            this.loadEmployeeList();
            alert("Added Succesfully!!");
        })
        // }
    }
    emailValidate(c: FormControl) {
        let EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                "incorrectMailFormat": false
            }
        }
    }
    loadEmployeeList() {
        this.employeeSer.getEmplyees().subscribe(res => {
            this.employeeList = res;
        });
    }
    ngOnInit() {
        this.deptSer.getDepartments().subscribe((resp) => {
            this.departmentList = resp;
        });
        this.testAPi= "test t";
        this.loadEmployeeList();
        this.fg = new FormGroup({
            empID: new FormControl(),
            empName: new FormControl('', Validators.required),
            empDepartmentID: new FormControl('', Validators.required),
            empMobileNumber: new FormControl('', Validators.required),
            empEmail: new FormControl('', [Validators.required, this.emailValidate]),
            empActiveStatus: new FormControl('', Validators.required),
            empJoiningDate: new FormControl('', Validators.required),
            empDetails: new FormControl('', Validators.required),
            empDesignation: new FormControl('', Validators.required),
            //  empName: new FormControl('', Validators.required),
            // empDepartmentID: new FormControl(),
            // empMobileNumber: new FormControl(),
            // empEmail: new FormControl(),
            // empActiveStatus: new FormControl(),
            // empJoiningDate: new FormControl(),
            // empDetails: new FormControl(),
            // empDesignation: new FormControl(),
        });
        this.fg.value.empDepartmentID = 12;
    

        // this.employeeSer.GetMergeMap().subscribe(resp =>
        // {
        //     this.mergmapobje =resp;

        // });
        // let cob =new eClass();
        // alert(cob.tset);
    }
}