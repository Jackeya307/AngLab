import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  textTest = new FormGroup({
    text: new FormControl('')})


  asdf() {
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

  constructor(private route: ActivatedRoute) {
    console.log(route.snapshot.paramMap.get('id'));
    console.log(route.snapshot.queryParamMap.get('acc'));
  }
  btnToggle(paras: any) {
    // this.btnFlag = !this.btnFlag
    console.log('子類別', paras);
  }

  load() {
    alert('歡迎');
  }
}
