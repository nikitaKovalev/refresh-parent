import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss'],
})
export class Child1Component {
  constructor(private _counterService: CounterService) {}

  title = 'app-child1';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
