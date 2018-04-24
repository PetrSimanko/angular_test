import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ["name"]
})
export class CounterComponent {

  name: string = 'first';

  @Input()
  value: number = 0;

  @Input('step')
  addToValue: number = 1;

  add(): number {
    return this.value += this.addToValue;
  }

}
