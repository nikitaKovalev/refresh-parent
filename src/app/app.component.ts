import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {COUNTER, COUNTER_PROVIDER} from './counter';
import {IClickedCounter, ICounter} from './interfaces/counter.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [COUNTER_PROVIDER],
})
export class AppComponent implements OnInit, OnDestroy {
  readonly data: IClickedCounter = {text: ''};

  private destroyed$ = new Subject<void>();

  constructor(@Inject(COUNTER) readonly counter$: Subject<ICounter>) {}

  ngOnInit() {
    this.updateClickedCounter();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private updateClickedCounter(): void {
    this.counter$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((dataCounter: ICounter) => this.data.text = dataCounter.type);
  }
}
