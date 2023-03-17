import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER } from '../refresher';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
private _count = 0;

  constructor(@Inject(REFRESHER) private readonly _refresher$: Subject<Refresher>) {}

  onClick() {
    this._refresher$.next({ name: this.constructor.name, count: this._count++ });
  }
}
