import { Component, Inject } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-grand-grand-child2',
  templateUrl: './grand-grand-child2.component.html',
  styleUrls: ['./grand-grand-child2.component.scss']
})
export class GrandGrandChild2Component {
  name = 'Grand grand child 2';
  count = 0;

  constructor(
    @Inject(AppService) private readonly _service: AppService
  ) {}

  numberClick(): void {
    this.count = this.count + 1;
    this._service.countClick(this.name, this.count);
  }
}
