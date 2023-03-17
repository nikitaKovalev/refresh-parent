import {Component, Inject} from '@angular/core';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CounterService],
})
export class AppComponent {
  constructor(private _counterService: CounterService) {}

  // private _counterService = Inject(CounterService);
  counterData$ = this._counterService.counterData$;
  title = 'refresh-parent';
}
