import {Component, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {Child2Component} from '../child2/child2.component';
import {COUNTER} from '../counter';
import {ICounter} from '../interfaces/counter.interface';

@Component({
  selector: 'app-grand-child2',
  templateUrl: './grand-child2.component.html',
  styleUrls: ['./grand-child2.component.scss'],
})
export class GrandChild2Component {
  count = 1;

  constructor(
    @Inject(COUNTER) private counter$: Subject<ICounter>,
    @Inject(Child2Component) public parent: Child2Component,
  ) {}

  refresh(): void {
    this.counter$.next({type: this.constructor.name, count: this.count++});
  }
}
