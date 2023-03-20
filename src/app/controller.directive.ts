import { Directive, InjectionToken, Input } from '@angular/core';

export const CONTROLLER = new InjectionToken<ControllerDirective>('CONTROLLER');

@Directive({
  standalone: true,
  selector: 'app-child1[data], app-child2[data], app-child3[data]',
  providers: [{provide: CONTROLLER, useExisting: ControllerDirective}]
})
export class ControllerDirective {
  @Input()
  data: {name:string} | null = null;
}
