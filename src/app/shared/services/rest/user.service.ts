import { Constants } from '../../../classes/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  fetchUsers(): Observable<user.RootObject> {
    const url = `${Constants.API_END_POINT}?nat=${Constants.NATIONALITIES.join(',').toLowerCase()}?inc=${Constants.REQUIRED_FIELDS.join(',').toLowerCase()}`
    return this.http.get<user.RootObject>(url);
  }
}
