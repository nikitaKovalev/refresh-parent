import {Component, Inject, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {COUNTER} from '../counter';
import {ICounter} from '../interfaces/counter.interface';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component {
  @Input() data: any;
  count = 1;

  constructor(@Inject(COUNTER) private counter$: Subject<ICounter>) {}

  refresh(): void {
    this.counter$.next({type: this.constructor.name, count: this.count++});
  }
}
