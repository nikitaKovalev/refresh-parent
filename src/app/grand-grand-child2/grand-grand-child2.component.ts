import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from "../refresher";
import { Subject } from "rxjs";
import { Data, DATA } from "../getData";

@Component({
  selector: 'app-grand-grand-child2',
  templateUrl: './grand-grand-child2.component.html',
  styleUrls: ['./grand-grand-child2.component.scss']
})
export class GrandGrandChild2Component {
  name = 'Grand grand child 2';
  private _count = 0;

  constructor(
    @Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>) {
  }

  onClick() {
    this._refresher$.next({name: this.name, count: this._count++});
  }
}
