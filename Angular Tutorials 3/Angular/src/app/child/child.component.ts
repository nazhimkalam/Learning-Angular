import { EmployeeService } from './../employee.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  template: `
    <h1>{{ 'Hello ' + cData }}</h1>

    <button (click)="fireEvent()">
      Click to display content from child to parent
    </button>

    <div>
      <h4>All details of the employees:</h4>
      <div *ngFor="let employee of employees; index as i">
        <p>{{ i + 1 + '. ' + employee.name + '  ' + employee.age }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      h1 {
        color: red;
      }
    `,
  ],
})
export class ChildComponent implements OnInit {
  @Input('dataToChild') public cData; // sending data from parent component into the child component
  @Output() public toParent = new EventEmitter(); // sending data from child component into the parent component, remember to import EventEmitter from angular core only.

  public employees: object[];

  constructor(private _employeeD: EmployeeService) {}

  ngOnInit(): void {
    this._employeeD.getEmployeeDetails().subscribe((data) => {
      this.employees = data;
    });
  }

  public fireEvent() {
    this.toParent.emit('Data from the Child component to the Parent component');
  }
}
