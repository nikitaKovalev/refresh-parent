import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from "../refresher";
import { Subject } from "rxjs";
import { Data, DATA } from "../getData";

@Component({
  selector: 'app-grand-grand-child1',
  templateUrl: './grand-grand-child1.component.html',
  styleUrls: ['./grand-grand-child1.component.scss']
})
export class GrandGrandChild1Component {
  name = 'Grand grand child 1';
  private _count = 0;

  constructor(
    @Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>) {
  }

  onClick() {
    this._refresher$.next({name: this.name, count: this._count++});
  }
}
