import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorItemsComponent } from './actor-items/actor-items.component';
import { SearchActorPipe } from './search-actor.pipe';
import { ActorDetailsComponent } from './actor-details/actor-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ActorItemsComponent,
    SearchActorPipe,
    ActorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
