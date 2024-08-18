import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTableShareOuputComponent } from './login-table-share-ouput.component';

describe('LoginTableShareOuputComponent', () => {
  let component: LoginTableShareOuputComponent;
  let fixture: ComponentFixture<LoginTableShareOuputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginTableShareOuputComponent]
    });
    fixture = TestBed.createComponent(LoginTableShareOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
