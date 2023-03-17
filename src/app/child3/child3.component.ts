import {Component, ElementRef} from '@angular/core';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>
  ) {}

  onClick(): void {
    this._clickService.click.next(this._element.nativeElement.tagName.toLowerCase())
  }
}
