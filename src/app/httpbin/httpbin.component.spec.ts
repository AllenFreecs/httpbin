import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpbinComponent } from './httpbin.component';

describe('HttpbinComponent', () => {
  let component: HttpbinComponent;
  let fixture: ComponentFixture<HttpbinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpbinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpbinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
