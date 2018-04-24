import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component {
  value: number = 0;

  @Output()
  eventCounter: EventEmitter<number> = new EventEmitter();

  add(): void {
    this.eventCounter.emit(++this.value);
  }
}
