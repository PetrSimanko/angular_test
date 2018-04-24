import { Component } from '@angular/core';
import {CounterService} from "../../counter.service";

@Component({
  selector: 'app-cnt3',
  templateUrl: './cnt3.component.html',
  styleUrls: ['./cnt3.component.css'],
  providers: [CounterService]
})
export class Cnt3Component {
  value: number = 0;
  constructor(private service: CounterService) {}

  add(): number {
    this.service.add();
    return this.value = this.service.getValue();
  }

  rem(): number {
    this.service.rem();
    return this.value = this.service.getValue();
  }
}
