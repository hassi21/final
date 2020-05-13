import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthinComponent } from './authin.component';

describe('AuthinComponent', () => {
  let component: AuthinComponent;
  let fixture: ComponentFixture<AuthinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
