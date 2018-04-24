import { Component } from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css']
})
export class StructuralComponent {
  isShow: boolean = true;
  listSteps: string[] = ['first', 'second', 'third', 'fourth', 'fifth'];
  step: number = 1;

  show(): boolean {
    return this.isShow = !this.isShow;
  }

  add(): number {
    return (++this.step > 3 ? this.step = 1 : this.step);
  }
}
