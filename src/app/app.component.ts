import { forkJoin } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { UserService } from './shared/services/rest/user.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/internal/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  perCountryUsers: user.Result[][] = [];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.fetchUsers().forEach(async perCountryUsers$ => {
      this.perCountryUsers.push(await forkJoin(perCountryUsers$).pipe(delay(5000)).toPromise());
    })
  }

}
