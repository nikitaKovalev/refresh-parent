import { Component, Inject } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component {
  name = 'Child 1';
  count = 0;

  constructor(
    @Inject(AppService) private readonly _service: AppService
  ) {}

  numberClick(): void {
    this.count = this.count + 1;
    this._service.countClick(this.name, this.count);
  }

}
