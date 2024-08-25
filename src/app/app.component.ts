
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngLab';
  id = '124'
  constructor(private route: Router) {}

  getSignup() {
    this.route.navigate(['/signup']);
  }
  getLogin(id:string) {
    this.route.navigate([`/login/${id}`],{
      queryParams:{
        acc : 'this.service.acc'
      }
    });
  }
}
