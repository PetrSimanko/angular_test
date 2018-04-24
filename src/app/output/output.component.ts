import { Component } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {

  constructor() { }

  eventCounterHandler(value): void {
    console.log(`eventCounterHandler -> ${value}`);
  }

}
