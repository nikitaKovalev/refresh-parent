import { Component, Inject } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component {
  name = 'Child 2';
  count = 0;

  constructor(
    @Inject(AppService) private readonly _service: AppService
  ) {}

  numberClick(): void {
    this.count = this.count + 1;
    this._service.countClick(this.name, this.count);
  }
}
