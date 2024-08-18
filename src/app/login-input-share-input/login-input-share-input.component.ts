import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-input-share-input',
  templateUrl: './login-input-share-input.component.html',
  styleUrls: ['./login-input-share-input.component.css'],
})
export class LoginInputShareInputComponent {
  @Input() txtContext = {
    title: '新增',
    accLabel: '帳號: ',
    pwLabel: '密碼: ',
    submit: '送出',
  };
  @Input() userData = {
    acc: '',
    pw: '',
  };
  @Input() error = {
    acc: '請輸入帳號',
    pw: '請輸入密碼',
    accExists: '此帳號已存在',
    pwExists: '此密碼已存在',
  };
  errState = {
    pwError: false,
    accError: false,
    accExistsError: false,
    pwExistsError: false,
  };
  accDis = false;
}
