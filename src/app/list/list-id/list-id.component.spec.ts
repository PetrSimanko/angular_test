import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListIdComponent } from './list-id.component';

describe('ListIdComponent', () => {
  let component: ListIdComponent;
  let fixture: ComponentFixture<ListIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
