import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  private value: number = 0;

  add(): number {
    return ++this.value;
  }

  rem(): number {
    return --this.value;
  }

  getValue() {
    return this.value;
  }
}
