import { Constants } from './classes/constants';
import { UserService } from './shared/services/rest/user.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    perCountryUsers: user.User[][] = [];

    constructor(private userService: UserService) { }

    ngOnInit() {
        Constants.NATIONALITIES.forEach((nationality: string, index: number) => {
            // API can't handle parallel requests therefore firing sequential after 1 second each
            setTimeout(async () => {
                this.perCountryUsers.push(await forkJoin(
                    Constants.GENDER
                        .map(gender => this.userService.fetchUser(nationality, gender))
                ).toPromise());
            }, index * 1000);
        });
    }
}
