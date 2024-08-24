import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  text() {
    this.userInfo.account = '111';
    this.adc.age = 4545;
  }
  adc = { age: 0 };

  title = '登入';
  role = '主管';
  AccPH = '請輸入帳號';
  btnFlag = false;

  count = 0;
  userInfo = {
    account: '',
    password: '',
  };
  btnToggle(paras: any) {
    // this.btnFlag = !this.btnFlag
    console.log('子類別', paras);
  }

  load() {
    alert('歡迎');
  }
}
