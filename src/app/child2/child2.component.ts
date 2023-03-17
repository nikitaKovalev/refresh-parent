import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss'],
})
export class Child2Component {
  constructor(private _counterService: CounterService) {}

  title = 'app-child2';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
