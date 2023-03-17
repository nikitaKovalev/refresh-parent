import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from '../refresher';
import { Subject } from 'rxjs';
import { Data, DATA } from "../getData";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  name = 'Child 1';
  private _count = 0;

  constructor(
    @Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>)
  {}

  onClick() {
    this._refresher$.next({name: this.name, count: this._count++});
  }
}
