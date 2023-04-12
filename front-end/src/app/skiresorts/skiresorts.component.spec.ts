import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiresortsComponent } from './skiresorts.component';

describe('SkiresortsComponent', () => {
  let component: SkiresortsComponent;
  let fixture: ComponentFixture<SkiresortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkiresortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiresortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
