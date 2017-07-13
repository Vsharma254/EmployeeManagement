import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { Employee } from '../../shared/model/employee';
@Pipe({
    name: 'empFilter'
})
export class EmployeePipe implements PipeTransform {
    transform(value: any[]): any {
         if (!value) {
            return value;
        }
   return value.filter(item => 
        {
           return item.empName == 'rrr'
        });
    }
}