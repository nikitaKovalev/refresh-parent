import { Component, Inject, OnInit } from '@angular/core';
import { Refresher, REFRESHER, REFRESHER_PROVIDER } from './refresher';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Data, DATA, DATA_PROVIDER } from "./getData";
import { DestroyedService } from "./destroyed.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [REFRESHER_PROVIDER, DATA_PROVIDER, DestroyedService],
})
export class AppComponent implements OnInit {

  constructor(
    @Inject(REFRESHER) readonly refresher$: Subject<Refresher>,
    @Inject(DATA) readonly data$: Subject<Data>,
    @Inject(DestroyedService) private readonly _destroy$: Observable<void>) {}

  ngOnInit(): void {
    this.refresher$.pipe(takeUntil(this._destroy$))
      .subscribe((data) => {
        this.data$.next(data);
      })
  }
}
