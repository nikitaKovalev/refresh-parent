import { Component, Inject } from '@angular/core';
import { CONTROLLER, ControllerDirective } from '../controller.directive';

@Component({
  selector: 'app-grand-grand-child2',
  templateUrl: './grand-grand-child2.component.html',
  styleUrls: ['./grand-grand-child2.component.scss']
})
export class GrandGrandChild2Component {
  constructor(@Inject(CONTROLLER) readonly controller: ControllerDirective) {}
}
