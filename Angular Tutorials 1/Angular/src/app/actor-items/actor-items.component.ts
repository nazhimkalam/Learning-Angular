import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-items',
  templateUrl: './actor-items.component.html',
})
export class ActorItemsComponent implements OnInit {
  @Input() public parentData; // using this we transfer data from parent to child component

  constructor() {}

  // the ngOnInit() method runs after the constructor is done running
  ngOnInit(): void {}
}
