import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string;
  check: boolean;
  information: Object;
  message: string;

  displayContentFromChild(name: string) {
    alert('This is the information from the child component ' + name);
  }

  constructor() {
    this.title = 'Parent Component';
    this.message = 'click to display parent';
    this.check = false;
    this.information = {
      age: 42,
      status: 'married',
      gender: 'male',
    };
  }

  clicked() {
    this.check = !this.check;
    if (!this.check) {
      this.message = 'click to display parent';
    } else {
      this.message = 'click to remove parent';
    }
  }
}
