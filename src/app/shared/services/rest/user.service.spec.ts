import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

let service: UserService
let httpClient: HttpClient;
let httpClientSpy: { get: jasmine.Spy };

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [UserService, HttpClient]
        });
        httpClient = TestBed.get(HttpClient);
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new UserService(<any>httpClientSpy);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return expected heroes (HttpClient called once)', () => {
        const expected =
            { results: [{ "gender": "male", "name": { "title": "Mr", "first": "Deniz", "last": "Bayındır" }, "location": { "street": { "number": 1326, "name": "Filistin Cd" }, "city": "Kayseri", "state": "Kahramanmaraş", "country": "Turkey", "postcode": "92468", "coordinates": { "latitude": "-11.8393", "longitude": "-90.4111" }, "timezone": { "offset": "-2:00", "description": "Mid-Atlantic" } }, "dob": { "date": new Date(), "age": 69 }, "picture": { "large": "https://randomuser.me/api/portraits/men/16.jpg", "medium": "https://randomuser.me/api/portraits/med/men/16.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg" }, "nat": "TR" }] };

        httpClientSpy.get.and.returnValue(of(expected));
        service.fetchUser('TR', 'female').subscribe(
            user => { 
                expect(user).toEqual(expected.results[0] as any, 'expected user') 
            },
            fail
        );
        expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
    });
});

