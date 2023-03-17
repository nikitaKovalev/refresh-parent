import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ICounter} from '../interfaces/counter.interface';

@Injectable()
export class CounterService {
  public counterData$ = new BehaviorSubject<ICounter>({} as ICounter);

  public refresh(type: string, count: number): void {
    this.counterData$.next({type, count});
  }
}
