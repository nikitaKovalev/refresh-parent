import {Component} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss'],
})
export class Child3Component {
  constructor(private _counterService: CounterService) {}

  title = 'app-child3';
  count = 1;

  refresh(): void {
    this._counterService.refresh(this.title, this.count++);
  }
}
