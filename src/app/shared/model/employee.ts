import { Department } from './department'
export interface Employee {
    employeeName: string;
    employeeEmail:string;
    employeeNumber:string;
    EmployeeState:number;
    employeeDepartment: Department;
}