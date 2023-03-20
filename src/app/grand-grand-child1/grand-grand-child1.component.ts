import { Component, Inject } from '@angular/core';
import { CONTROLLER, ControllerDirective } from '../controller.directive';

@Component({
  selector: 'app-grand-grand-child1',
  templateUrl: './grand-grand-child1.component.html',
  styleUrls: ['./grand-grand-child1.component.scss']
})
export class GrandGrandChild1Component {
  constructor(@Inject(CONTROLLER) readonly controller: ControllerDirective) {}
}
