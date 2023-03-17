import {Component, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CLICK_PROVIDER, CLICK_TOKEN, IClickToken} from './ckick-token';
import {ClickService} from './click.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CLICK_PROVIDER]
})
export class AppComponent {
  title = 'refresh-parent';
  currentComponent: Observable<{[key: string]: number | string}> =
    this._clickService.currentComponent.asObservable();

  constructor(
    @Inject(ClickService) private _clickService: ClickService,
    @Inject(CLICK_TOKEN) private readonly _clickToken$: Subject<IClickToken>,
  ) {}
}
