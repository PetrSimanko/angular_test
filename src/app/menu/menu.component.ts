import { Component } from '@angular/core';

interface AppRouter {
  name: string;
  path: string;
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  listRouters: Array<AppRouter> = [];

  constructor() {
    this.listRouters.push({name: 'attribute', path: 'attribute'});
    this.listRouters.push({name: 'structure', path: 'structural'});
    this.listRouters.push({name: 'input', path: 'input'});
    this.listRouters.push({name: 'output', path: 'output'});
    this.listRouters.push({name: 'list', path: 'list'});
    this.listRouters.push({name: 'service', path: 'simple'});
  }

}
