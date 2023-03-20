import {Component, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {Child1Component} from '../child1/child1.component';
import {COUNTER} from '../counter';
import {ICounter} from '../interfaces/counter.interface';

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.scss'],
})
export class GrandChild1Component {
  count = 1;

  constructor(
    @Inject(COUNTER) private counter$: Subject<ICounter>,
    @Inject(Child1Component) public parent: Child1Component,
  ) {}

  refresh(): void {
    this.counter$.next({type: this.constructor.name, count: this.count++});
  }
}
