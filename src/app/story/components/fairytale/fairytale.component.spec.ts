import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FairytaleComponent } from './fairytale.component';

describe('FairytaleComponent', () => {
  let component: FairytaleComponent;
  let fixture: ComponentFixture<FairytaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FairytaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FairytaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
