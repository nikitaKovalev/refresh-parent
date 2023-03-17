import { Component, Inject } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.scss']
})
export class Child3Component {
  name = 'Child 3';
  count = 0;

  constructor(
    @Inject(AppService) private readonly _service: AppService
  ) {
  }

  numberClick(): void {
    this.count = this.count + 1;
    this._service.countClick(this.name, this.count);
  }
}
