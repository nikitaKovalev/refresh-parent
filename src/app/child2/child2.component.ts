import {Component, ElementRef} from '@angular/core';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>,
  ) {}

  onClick(): void {
    this._clickService.click.next(this._element.nativeElement.tagName.toLowerCase())
  }
}
