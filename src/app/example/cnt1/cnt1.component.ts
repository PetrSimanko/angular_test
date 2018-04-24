import { Component } from '@angular/core';
import { CounterService } from "../../counter.service";

@Component({
  selector: 'app-cnt1',
  templateUrl: './cnt1.component.html',
  styleUrls: ['./cnt1.component.css']
})
export class Cnt1Component {
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
