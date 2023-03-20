import {InjectionToken} from '@angular/core';
import {Subject} from 'rxjs';
import {AppComponent} from './app.component';
import {ICounter} from './interfaces/counter.interface';

export const COUNTER = new InjectionToken<ICounter>('COUNTER');

export const COUNTER_PROVIDER = {
  provide: COUNTER,
  useValue: new Subject<ICounter>(),
}

