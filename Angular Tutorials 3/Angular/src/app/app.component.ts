import { EmployeeService } from './employee.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <input #firstName type="text" [(ngModel)] = "fName" placeholder="First Name"/> 
    <input #lastName type="text"  [(ngModel)] = "lName" placeholder="Last Name" />
    <button (click)="FuncDisplay(firstName, lastName)">Click Me</button><br/>
    <h2>{{fName + " " + lName}}</h2>

    <h2 [style.color]="error ? 'red' : 'orange'">{{ data }}</h2>

    <h3 class="text-success">text-success</h3>
    <h3 class="text-danger">text-danger</h3>
    <h3 class="text-special">text-special</h3>

    <h2 [ngClass]="messageClass">Code evolution</h2>

    <div *ngIf = "display; then thenBlock; else elseBlock"></div>

    <ng-template #thenBlock>
      <h2>
        Text is displayed
      </h2>
    </ng-template>

    <ng-template #elseBlock>
      <h2>
        Text is hidden
      </h2>
    </ng-template>

    <div [ngSwitch] = "color">
      <div *ngSwitchCase = "'red'" style = "color:'red'"><h3>This is red colour</h3></div>
      <div *ngSwitchCase = "'blue'"  style = "color:'blue'"><h3>This is blue colour</h3></div>
      <div *ngSwitchCase = "'green'" style = "color:'green'"><h3>This is green colour</h3></div>
      <div *ngSwitchDefault><h3>Pick Again</h3></div>
    </div>

    <div *ngFor = "let color of myColors, index as i">
      <h2 style = "color:{{color}}">{{i + ". "}}{{color}}</h2>
    </div>

    <h2>{{message}}</h2>
    <child (toParent)="message=$event" [dataToChild]="pData"></child>

    <div>
      <h1>Pipes</h1>
      <h3>{{ schoolName }}</h3>
      <h3>{{ schoolName | lowercase }}</h3>
      <h3>{{ schoolName | uppercase }}</h3>
      <h3>{{ schoolName | titlecase }}</h3>
      <h3>{{ schoolName | slice:3:15 }}</h3>
      <h3>{{ student | json }}</h3>
      <h3>{{ 5.12 | number:'2.3-5'}}</h3> <p>at least 2 integers, with decimal numbers of minimum 3 and maximum of 5</p>
      <h3>{{0.25 | percent}}</h3>
      <h3>{{ 0.25 | currency }}</h3>
      <h3>{{ 0.25 | currency }}</h3>
      <h3>{{ myDate }}</h3>
      <h3>{{ myDate | date:'shortDate'}}</h3>
      <h3>{{ myDate | date:'shortTime'}}</h3>
    </div>

    <h1 class = "employee" >EMPLOYEES</h1>
    <div>
      <h4>Names of the employees:</h4>
      <div *ngFor = "let employee of employees, index as i">
        <p> {{ i+1 + ". " + employee.name }} </p>
      </div>
    </div>    
    
  `,
  styles: [
    `
      .employee{
        color:red;
      }
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `,
  ],
})
export class AppComponent {
  // [(ngModel)] is a two way binding property , () to send data from view to code, [] from code to view
  public fName:string;
  public lName:string;
  public message:string;
  public data: string;
  public error: boolean;
  public myStyle: string;
  public messageClass: object;
  public display:boolean;
  public color:string;
  public myColors:string[];
  public pData = "Nazhim";

  // pipes
  public schoolName:string = "Royal Institute havelocK toWn";
  public student:object = {
    "Name":"Nazhim Kalam",
    "Age":18,
    "Gender":"Male"
  }
  public myDate:object = new Date();

  // services
  public employees:object[];

  public constructor(private _employee:EmployeeService) {
    this.error = false;
    this.display = true;
    this.fName = "";
    this.lName = "";
    this.color = "blue";
    this.myColors = ['red','blue','orange','brown','purple','green'];
  }

  ngOnInit(): void {
    this._employee.getEmployeeDetails().subscribe((data) => {
      this.employees = data;
    });
  }

  public FuncDisplay(firstName, lastName) {
    this.data = firstName.value + ' ' + lastName.value;
    this.messageClass = {
      'text-success': !this.error,
      'text-danger': this.error,
      'text-special': !this.error,
    };
    console.log(this.messageClass);
    this.error = !this.error;
  }
}
