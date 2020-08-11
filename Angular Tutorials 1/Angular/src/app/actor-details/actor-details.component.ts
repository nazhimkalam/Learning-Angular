import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actor-details',
  templateUrl: './actor-details.component.html',
})
export class ActorDetailsComponent implements OnInit {

    @Input() public parentData; // using this we transfer data from parent to child component
  
  constructor() { }

  ngOnInit(): void {
  }

}
