import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPracticeComponent } from './login-practice.component';

describe('LoginPracticeComponent', () => {
  let component: LoginPracticeComponent;
  let fixture: ComponentFixture<LoginPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPracticeComponent]
    });
    fixture = TestBed.createComponent(LoginPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
