import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login-table-share-ouput',
  templateUrl: './login-table-share-ouput.component.html',
  styleUrls: ['./login-table-share-ouput.component.css']
})
export class LoginTableShareOuputComponent {


  @Output() userInfo = new EventEmitter()

}
