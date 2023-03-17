import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { GrandChild1Component } from './grand-child1/grand-child1.component';
import { GrandChild2Component } from './grand-child2/grand-child2.component';
import { GrandChild3Component } from './grand-child3/grand-child3.component';
import { GrandGrandChild1Component } from './grand-grand-child1/grand-grand-child1.component';
import { GrandGrandChild2Component } from './grand-grand-child2/grand-grand-child2.component';
import { GrandGrandChild3Component } from './grand-grand-child3/grand-grand-child3.component';

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    GrandChild1Component,
    GrandChild2Component,
    GrandChild3Component,
    GrandGrandChild1Component,
    GrandGrandChild2Component,
    GrandGrandChild3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
