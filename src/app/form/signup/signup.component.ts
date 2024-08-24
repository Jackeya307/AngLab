import { Articles } from './../../interface/Articles';
import { UserService } from './../../user.service';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  userForm = new FormGroup({
    account: new FormControl('',Validators.required),
    password: new FormControl('2'),
    userInfo: new FormGroup({
      age: new FormControl(3),
      tall: new FormControl(4),
    }),
    address: new FormArray([new FormControl('5')]),
  });

  items = (this.userForm.get('address') as FormArray).controls;

  article : Articles[] = []

  constructor(private service: UserService) {
    service.formPost(this.userForm.value).subscribe(data=>{
  console.log(data)
      this.article = data
    })
  }

  reset() {
    this.userForm.reset({
      account: 'boy',
    });
  }
  submit() {
    console.log(this.userForm.value);
    console.log(this.article)
  }
  remove() {
    this.items.pop();
  }
  addAddress() {
    this.items.push(new FormControl('123'));
  }

}
