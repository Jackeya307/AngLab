import { Component } from '@angular/core';

@Component({
  selector: 'app-login-practice',
  templateUrl: './login-practice.component.html',
  styleUrls: ['./login-practice.component.css']
})
export class LoginPracticeComponent {
  title = '新增'

  acc = ''
  pw = ''

  submit = '送出'
  change = '切換'

  accDis = false
  spanHidden = true
  submitInfo(e:any){
    if(!(this.acc&&this.pw)){
      alert('請填入資訊')
      return
    }
    this.spanHidden = !this.spanHidden

  }
  switch(){
    this.title = this.title ==='修改'? '新增': '修改'
    this.accDis = !this.accDis
  }
}
