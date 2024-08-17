import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = '登入'
  role = '主管'
  AccPH = '請輸入帳號'
  btnFlag = false

  count = 0

  btnToggle(){
    // this.btnFlag = !this.btnFlag
    this.count = 123
  }

}
