import { Department } from './department'
export interface Employee {
    empID: Number,
    empName: string;
    empDepartmentID: Number,
    empMobileNumber: Number,
    empEmail: String,
    empActiveStatus: Boolean,
    empDeleteStatus: Boolean,
    empCreateDate: Date,
    empUpdateDate: Date,
    empJoiningDate: Date,
    empDetails: String,
    empDesignation: String
}