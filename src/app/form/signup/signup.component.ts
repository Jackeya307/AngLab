import { Articles } from './../../interface/Articles';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  MaxLengthValidator,
  MaxValidator,
  RequiredValidator,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userForm = new FormGroup({
    account: new FormControl('', [Validators.required,Validators.minLength(3)]),
    password: new FormControl('', Validators.maxLength(5)),
    userInfo: new FormGroup({
      age: new FormControl(3),
      tall: new FormControl(4),
    }),
    address: new FormArray([new FormControl('5')]),
  });

  items = (this.userForm.get('address') as FormArray).controls;

  article: Articles[] = [];

  constructor(private service: UserService) {
    // service.formPost(this.userForm.value).subscribe(data=>{
    //   console.log(data)
    //   this.article = data
    // })
    this.userForm.valueChanges.subscribe(value => {
      console.log('表單數據變化:', value);
    });
  }


  reset() {
    this.userForm.reset({
      account: 'boy',
    });
  }
  submit() {
    if (!this.userForm.valid) {
      alert('請輸入完整');
      console.log('errors:',this.userForm.get('account')?.errors)
      return;
    }


    console.log(this.userForm.controls);
  }
  remove() {
    this.items.pop();
  }
  addAddress() {
    this.items.push(new FormControl('123'));
  }
}
