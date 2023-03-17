import {Component, ElementRef, Inject} from '@angular/core';
import {Subject} from 'rxjs';
import {CLICK_TOKEN, IClickToken} from '../ckick-token';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>,
    @Inject(CLICK_TOKEN) readonly clickToken$: Subject<IClickToken>,
  ) {}

  onClick(): void {
    const name = this._element.nativeElement.tagName.toLowerCase();
    this.clickToken$.next({name})
    this._clickService.click.next(name)
  }
}
