import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-share-input',
  templateUrl: './share-input.component.html',
  styleUrls: ['./share-input.component.css'],
})
export class ShareInputComponent {
  @Input() account = '';
  @Input() password = '';
  @Output() userData = new EventEmitter();
  btnToggle() {
    this.userData.emit({ acc: this.account, pw: this.password });
  }
  constructor() {
    console.log('constructor');
  }

  // 2. Hook / construct (input參數改成物件 觀察OnChanges變化)
  @Input() inputUser = {
    inputAccount: '',
    inputPwd: '',
  };


}
