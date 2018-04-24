import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterService } from './counter.service';

import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { StructuralComponent } from './structural/structural.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { MenuComponent } from './menu/menu.component';
import { CounterComponent } from './input/counter/counter.component';
import { Counter2Component } from './output/counter2/counter2.component';
import { ListComponent } from './list/list.component';
import { ListIdComponent } from './list/list-id/list-id.component';
import { ListShowComponent } from './list/list-show/list-show.component';
import { ListEditComponent } from './list/list-edit/list-edit.component';
import { ExampleComponent } from './example/example.component';
import { Cnt1Component } from './example/cnt1/cnt1.component';
import { Cnt2Component } from './example/cnt2/cnt2.component';
import { Cnt3Component } from './example/cnt3/cnt3.component';
import { ListChildComponent } from './list/list-child/list-child.component';

const appRoutes: Routes = [
  { path: '', component: AttributeComponent },
  { path: 'attribute', component: AttributeComponent },
  { path: 'structural', component: StructuralComponent },
  { path: 'input', component: InputComponent },
  { path: 'output', component: OutputComponent },
  { path: 'simple', component: ExampleComponent },
  { path: 'list', component: ListComponent },
  { path: 'list/:id/show', component: ListShowComponent},
  { path: 'list/:id', component: ListIdComponent, children:
    [
      { path: 'show', component: ListShowComponent },
      { path: 'edit', component: ListEditComponent }
    ] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    StructuralComponent,
    InputComponent,
    OutputComponent,
    MenuComponent,
    CounterComponent,
    Counter2Component,
    ListComponent,
    ListIdComponent,
    ListShowComponent,
    ListEditComponent,
    ExampleComponent,
    Cnt1Component,
    Cnt2Component,
    Cnt3Component,
    ListChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
