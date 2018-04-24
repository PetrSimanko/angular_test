import { Component } from '@angular/core';
import {CounterService} from "../../counter.service";

@Component({
  selector: 'app-cnt2',
  templateUrl: './cnt2.component.html',
  styleUrls: ['./cnt2.component.css']
})
export class Cnt2Component {
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
