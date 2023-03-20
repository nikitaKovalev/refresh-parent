import {Component, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {Child3Component} from '../child3/child3.component';
import {COUNTER} from '../counter';
import {ICounter} from '../interfaces/counter.interface';

@Component({
  selector: 'app-grand-grand-child3',
  templateUrl: './grand-grand-child3.component.html',
  styleUrls: ['./grand-grand-child3.component.scss'],
})
export class GrandGrandChild3Component {
  count = 1;

  constructor(
    @Inject(COUNTER) private counter$: Subject<ICounter>,
    @Inject(Child3Component) readonly parent: Child3Component,
  ) {}

  refresh(): void {
    this.counter$.next({type: this.constructor.name, count: this.count++});
  }
}
