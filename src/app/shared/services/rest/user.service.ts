import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Constants } from '../../../classes/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Rx';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }
    fetchUsers(): Observable<user.Result>[][] {
        return Constants.NATIONALITIES.map(nationality => {
            return Constants.GENDER.map(gender => {
                const url = `${Constants.API_END_POINT}?nat=${nationality}&inc=${Constants.REQUIRED_FIELDS.join(',')}&gender=${gender}`;
                return this.http.get<user.RootObject>(url).pipe(
                    switchMap(res => res.results)
                );
            });
        });
    }
}
