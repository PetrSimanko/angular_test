import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute',
  templateUrl: './attribute.component.html',
  styleUrls: ['./attribute.component.css']
})
export class AttributeComponent {
  sizeFont: number = 14;
  isRed: boolean = false;
  red(): void {
    this.isRed = !this.isRed;
  }
  add(): number {
    return this.sizeFont += 5;
  }
}
