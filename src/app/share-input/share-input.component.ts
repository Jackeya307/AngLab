import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-share-input',
  templateUrl: './share-input.component.html',
  styleUrls: ['./share-input.component.css'],
})
export class ShareInputComponent implements OnChanges, OnInit {
  uppCase() {
    this.account = this.account.toUpperCase();
  }

  @Input() account = '';
  @Input() password = '';
  @Input() adc = { age: 100 };
  @Output() userData = new EventEmitter();
  btnToggle() {
    // this.userData.emit({ acc: this.account, pw: this.password });
  }
  constructor() {}

  ngOnInit(): void {
    // alert('歡迎光臨');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['account']) {
      this.account = this.account.toUpperCase();
    }
  }

  // 2. Hook / construct (input參數改成物件 觀察OnChanges變化)
  @Input() inputUser = {
    inputAccount: '',
    inputPwd: '',
  };
}
