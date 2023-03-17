import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-grand-child3',
  templateUrl: './grand-child3.component.html',
  styleUrls: ['./grand-child3.component.scss'],
})
export class GrandChild3Component {
  constructor(private _counterService: CounterService) {}

  title = 'grand-child3';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
