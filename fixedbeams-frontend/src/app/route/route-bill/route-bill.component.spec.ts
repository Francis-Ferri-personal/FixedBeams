import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBillComponent } from './route-bill.component';

describe('RouteBillComponent', () => {
  let component: RouteBillComponent;
  let fixture: ComponentFixture<RouteBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
