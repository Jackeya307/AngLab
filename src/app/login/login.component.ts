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
  account = ''
  password  = ''
  btnToggle(paras:any){
    // this.btnFlag = !this.btnFlag
    console.log('子類別',paras)
  }

}
