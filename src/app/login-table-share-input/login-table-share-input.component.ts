import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login-table-share-input',
  templateUrl: './login-table-share-input.component.html',
  styleUrls: ['./login-table-share-input.component.css']
})
export class LoginTableShareInputComponent {
  @Input() txtContext = {
    title: '新增',
    accLabel: '帳號: ',
    pwLabel: '密碼: ',
    submit: '送出',
  };
  @Input()userArray = [
    {
      acc: '001',
      pw: '1234',
    },
  ];
}
