import {Component, ElementRef} from '@angular/core';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-grand-child3',
  templateUrl: './grand-child3.component.html',
  styleUrls: ['./grand-child3.component.scss']
})
export class GrandChild3Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>
  ) {}

  onClick(): void {
    this._clickService.click.next(this._element.nativeElement.tagName.toLowerCase())
  }
}
