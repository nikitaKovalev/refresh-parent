import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-grand-grand-child3',
  templateUrl: './grand-grand-child3.component.html',
  styleUrls: ['./grand-grand-child3.component.scss'],
})
export class GrandGrandChild3Component {
  constructor(private _counterService: CounterService) {}

  title = 'grand-grand-child3';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
