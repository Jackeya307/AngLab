import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTableShareInputComponent } from './login-table-share-input.component';

describe('LoginTableShareInputComponent', () => {
  let component: LoginTableShareInputComponent;
  let fixture: ComponentFixture<LoginTableShareInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTableShareInputComponent]
    });
    fixture = TestBed.createComponent(LoginTableShareInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
