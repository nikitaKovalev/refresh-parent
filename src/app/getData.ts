import { InjectionToken } from "@angular/core";
import { Subject } from "rxjs";

export interface Data {
  name: string;
}

export const DATA = new InjectionToken<Data>("DATA");

export const DATA_PROVIDER = {
  provide: DATA,
  useValue: new Subject<Data>()

}
