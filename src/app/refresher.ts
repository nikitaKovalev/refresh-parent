import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export interface Refresher {
  name: string;
  count: number;
}

export const REFRESHER = new InjectionToken<Refresher>('REFRESHER');

export const REFRESHER_PROVIDER = {
  provide: REFRESHER,
  useValue: new Subject<Refresher>(),
}