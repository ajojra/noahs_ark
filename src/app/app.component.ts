import { UserService } from './shared/services/rest/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers().subscribe((response: user.RootObject) => {
      console.log(response.results);
    })
  }

}
