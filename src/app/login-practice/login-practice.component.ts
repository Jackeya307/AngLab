import { Component } from '@angular/core';

@Component({
  selector: 'app-login-practice',
  templateUrl: './login-practice.component.html',
  styleUrls: ['./login-practice.component.css'],
})
export class LoginPracticeComponent {
  txtContext = {
    title: '新增',
    accLabel: '帳號: ',
    pwLabel: '密碼: ',
    submit: '送出',
  };

  userData = {
    acc: '',
    pw: '',
  };

  error = {
    acc:'請輸入帳號',
    pw:'請輸入密碼',
    accExists: '此帳號已存在',
    pwExists: '此密碼已存在',
  }

  userArray = [
    {
      acc: '001',
      pw: '1234',
    },
  ];

  change = '切換';

  accDis = false;
  tbody = false;

  errState = {
    pwError: false,
    accError: false,
    accExistsError: false,
    pwExistsError: false,

  }
  submitInfo() {
    this.errState.accError = false
    this.errState.pwError = false
    this.errState.accExistsError = false
    this.errState.pwExistsError = false

    if (!this.userData.acc) {
      this.errState.accError = true
      return;
    }

    if(!this.userData.pw){
      this.errState.pwError = true
      return
    }
    let sd = this.userArray.includes(this.userData)
    this.userArray.forEach(item => {
      if( item.acc === this.userData.acc){
        this.errState.accExistsError = true
        return
      }
    });



    this.userArray.push({...this.userData});


    this.clearInputFields();
  }
  switch() {
    this.txtContext.title = this.txtContext.title === '修改' ? '新增' : '修改';
    this.accDis = !this.accDis;
  }
  clearInputFields() {
    this.userData = { acc: '', pw: '' };
  }
}
