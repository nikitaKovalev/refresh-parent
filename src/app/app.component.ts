import { Component, Inject } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'refresh-parent';

   constructor(
    @Inject(AppService) readonly service: AppService
  ) {}
}
