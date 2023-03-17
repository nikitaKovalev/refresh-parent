import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ClickService {
  currentComponent: BehaviorSubject<{[key: string]: number | string}> =
    new BehaviorSubject<{[key: string]: number | string}>({});

  click: Subject<string> = new Subject<string>();

  private _clickedComponents: BehaviorSubject<{ [key: string]: number }> =
    new BehaviorSubject<{ [key: string]: number }>({});

  constructor() {
    this.click.pipe().subscribe(val => {
      let clicked = this._clickedComponents.getValue();
      let current = {} as {[key: string]: number | string};

      current['name'] = val;
      if (!!clicked[val]) {
        clicked[val] += 1;
        current['count'] = clicked[val];
      } else {
        clicked[val] = 1;
        current['count'] = 1;
      }
      this._clickedComponents.next(clicked);
      this.currentComponent.next(current);
      // !!clicked[val] ? clicked[val] += 1 : clicked[val] = 1;
    });
  }

  updateInfo(compName: string): void {

  }
}
