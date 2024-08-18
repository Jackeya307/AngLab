import { Component, EventEmitter, Input, Output } from '@angular/core';

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
}
