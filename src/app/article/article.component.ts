import { MyDatePipe } from './../pipes/my-date.pipe';
import { UserService } from '../user.service';
import { Article } from './../interface/article';
import { Component } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  isPop = false;
fontSize = 24;
nowDate: Date = new Date();

  pop() {
    this.isPop = true;
  }
  nor() {
    this.isPop = false;
  }
  constructor(private user: UserService) {
    // user.getApi().subscribe(data=>{
    //   this.popData = data
    // })
  }
  popData: Article[] = [
    {
      title: '',
      context: '',
    },
  ];
}
