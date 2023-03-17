import { Component, Inject } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-grand-child1',
  templateUrl: './grand-child1.component.html',
  styleUrls: ['./grand-child1.component.scss']
})
export class GrandChild1Component {
  name = 'Grand child 1';
  count = 0;

  constructor(
    @Inject(AppService) private readonly _service: AppService
  ) {}

  numberClick(): void {
    this.count = this.count + 1;
    this._service.countClick(this.name, this.count);
  }

}
