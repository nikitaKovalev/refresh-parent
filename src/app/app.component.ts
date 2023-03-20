import { Component, Inject } from '@angular/core';
import { Refresher, REFRESHER, REFRESHER_PROVIDER } from './refresher';
import { map, share, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [REFRESHER_PROVIDER],
})
export class AppComponent {
  title = 'refresh-parent';

  readonly data$ = this.refresher$.pipe(
    map(({name}) => ({name})),
    share(),
  );

  constructor(@Inject(REFRESHER) readonly refresher$: Subject<Refresher>) {}
}
