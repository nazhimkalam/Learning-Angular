import { Component, OnInit } from '@angular/core';
import  {HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  text: string;
  actors: object;
  currentActor: object;

  show(actorInfo) {
    this.text = actorInfo.name;
    actorInfo.highlight = !actorInfo.highlight
    this.currentActor = actorInfo;
  }
  constructor(private http: HttpClient) {
    this.text = '';
    // this.actors = [];
  }

  ngOnInit():void{    // in order to fetch data from a json file into a variable we use this
    this.http.get<Object>("../assets/data.json").subscribe(data => {
      this.actors = data;
    })
  }
}
