import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent {

  constructor(private router: ActivatedRoute ) {
    console.log('load list show');
    console.log(this.router.snapshot.paramMap.get('id'));
    console.log(this.router.snapshot.queryParamMap.get('page'));
    console.log(this.router.snapshot.queryParamMap);
  }

}
