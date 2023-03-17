import { InjectionToken } from '@angular/core';
import { Subject } from 'rxjs';

export interface IClickToken {
  name: string;
}

export const CLICK_TOKEN = new InjectionToken<IClickToken>('CLICK_TOKEN');

export const REFRESHER_PROVIDER = {
  provide: CLICK_TOKEN,
  useValue: new Subject<IClickToken>(),
}
