import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER, REFRESHER_PROVIDER } from './refresher';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [REFRESHER_PROVIDER],
})
export class AppComponent {
  title = 'refresh-parent';

  constructor(@Inject(REFRESHER) readonly refresher$: Subject<Refresher>) {}
}
