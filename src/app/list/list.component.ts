import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private router: Router, ) {}

  goToAttribute(): void {
    this.router.navigate(['attribute']);
  }

}
