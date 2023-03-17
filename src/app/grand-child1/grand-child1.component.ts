import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.scss'],
})
export class GrandChild1Component {
  constructor(private _counterService: CounterService) {}

  title = 'grand-child1';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
