import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _name = '';
  private _count = 0;

  get getName(): string {
    return this._name;
  }

  get getCount(): number {
    return this._count;
  }

  countClick(name: string, count: number): void {
    this._name = name;
    this._count = count;
  }
}
