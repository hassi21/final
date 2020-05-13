import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogChoiceComponent } from './dialog-choice.component';

describe('DialogChoiceComponent', () => {
  let component: DialogChoiceComponent;
  let fixture: ComponentFixture<DialogChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
