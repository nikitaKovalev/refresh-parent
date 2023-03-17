import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-grand-child2',
  templateUrl: './grand-child2.component.html',
  styleUrls: ['./grand-child2.component.scss'],
})
export class GrandChild2Component {
  constructor(private _counterService: CounterService) {}

  title = 'grand-child2';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
