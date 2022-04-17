import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUnsubcriberComponent } from './observable-unsubcriber.component';

describe('ObservableUnsubcriberComponent', () => {
  let component: ObservableUnsubcriberComponent;
  let fixture: ComponentFixture<ObservableUnsubcriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableUnsubcriberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableUnsubcriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
