import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from "../refresher";
import { Subject } from "rxjs";
import { Data, DATA } from "../getData";

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  name = 'Child 3';
  private _count = 0;

  constructor(
    @Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>)
  {}

  onClick() {
    this._refresher$.next({name: this.name, count: this._count++});
  }
}
