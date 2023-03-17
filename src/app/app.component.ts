import {Component, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CLICK_TOKEN, IClickToken} from './ckick-token';
import {ClickService} from './click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refresh-parent';
  currentComponent: Observable<{[key: string]: number | string}> =
    this._clickService.currentComponent.asObservable();

  constructor(
    @Inject(ClickService) private _clickService: ClickService,
    // @Inject(CLICK_TOKEN) private _clickToken$: new Subject<IClickToken>(),
  ) {}
}
