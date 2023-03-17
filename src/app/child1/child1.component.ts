import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from '../refresher';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  private _count = 0;

  constructor(@Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>) {}

  onClick() {
    this._refresher$.next({ name: this.constructor.name, count: this._count++ });
  }
}
