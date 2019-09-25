import { Constants } from '../../../classes/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { Observable } from 'rxjs/internal/Rx';
import { switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    fetchUsers(nationality: string, gender: string): Observable<user.User> {

        const url = `${Constants.API_END_POINT}?nat=${nationality}&inc=${Constants.REQUIRED_FIELDS.join(',')}&gender=${gender}`;
        return this.http.get<user.RootObject>(url).pipe(
            switchMap(res => res.results),
            catchError((error) => {
                // handle error
                console.error(error);
                throw error;
            })
        );
    }
}
