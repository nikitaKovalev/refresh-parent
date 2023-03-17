import {Component, ElementRef} from '@angular/core';
import {ClickService} from '../click.service';

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.scss']
})
export class GrandChild1Component {
  constructor(
    private _clickService: ClickService,
    private _element: ElementRef<HTMLElement>
  ) {}

  onClick(): void {
    this._clickService.click.next(this._element.nativeElement.tagName.toLowerCase())
  }
}
