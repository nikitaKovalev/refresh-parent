import {Component, ElementRef} from '@angular/core';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-grand-grand-child2',
  templateUrl: './grand-grand-child2.component.html',
  styleUrls: ['./grand-grand-child2.component.scss']
})
export class GrandGrandChild2Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>
  ) {}

  onClick(): void {
    this._clickService.click.next(this._element.nativeElement.tagName.toLowerCase())
  }
}
