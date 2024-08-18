import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInputShareInputComponent } from './login-input-share-input.component';

describe('LoginInputShareInputComponent', () => {
  let component: LoginInputShareInputComponent;
  let fixture: ComponentFixture<LoginInputShareInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginInputShareInputComponent]
    });
    fixture = TestBed.createComponent(LoginInputShareInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
