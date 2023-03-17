import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from "../refresher";
import { Subject } from "rxjs";
import {Data, DATA} from "../getData";

@Component({
  selector: 'app-grand-child3',
  templateUrl: './grand-child3.component.html',
  styleUrls: ['./grand-child3.component.scss']
})
export class GrandChild3Component {
  name = 'Grand child 3';
  private _count = 0;

  constructor(
    @Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>)
  {}

  onClick() {
    this._refresher$.next({name: this.name, count: this._count++});
  }
}
