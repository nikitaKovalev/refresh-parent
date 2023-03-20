import {Component, Inject, Input} from '@angular/core';
import {Subject} from 'rxjs';
import {COUNTER} from '../counter';
import {ICounter} from '../interfaces/counter.interface';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  @Input() data: any;
  count = 1;

  constructor(@Inject(COUNTER) private counter$: Subject<ICounter>) {}

  refresh(): void {
    this.counter$.next({type: this.constructor.name, count: this.count++});
  }
}
