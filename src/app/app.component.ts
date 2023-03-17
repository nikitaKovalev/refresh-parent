import {Component, Inject} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {CLICK_PROVIDER, IClickToken} from './ckick-token';
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
    @Inject(CLICK_PROVIDER) private readonly _clickToken$: Subject<IClickToken>,
  ) {}
}
