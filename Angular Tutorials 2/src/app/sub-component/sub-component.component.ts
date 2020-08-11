import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './sub-component.component.html',
})
export class SubComponentComponent implements OnInit {
  @Input() actorInfo;
  @Output() sendToParent = new EventEmitter();
  name: string;

  myArray:string[] = ["Nazhim", "Abilash", "Ravindu", "Abdul"];
  
  childClicked() {
    this.sendToParent.emit(this.name);
  }

  show() {
    alert('You clicked');
  }

  actor() {
    return 'Actor:';
  }
  constructor() {
    this.name = 'Vijay';
  }

  ngOnInit(): void {}
}
