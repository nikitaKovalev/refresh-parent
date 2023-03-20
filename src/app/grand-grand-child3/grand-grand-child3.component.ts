import { Component, Inject } from '@angular/core';
import { CONTROLLER, ControllerDirective } from '../controller.directive';

@Component({
  selector: 'app-grand-grand-child3',
  templateUrl: './grand-grand-child3.component.html',
  styleUrls: ['./grand-grand-child3.component.scss']
})
export class GrandGrandChild3Component {
  constructor(@Inject(CONTROLLER) readonly controller: ControllerDirective) {}
}
