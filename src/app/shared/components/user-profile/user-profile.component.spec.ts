import { UserProfileComponent } from './user-profile.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatCardModule } from '@angular/material';


const expected =
            { results: [{ "gender": "male", "name": { "title": "Mr", "first": "Deniz", "last": "Bayındır" }, "location": { "street": { "number": 1326, "name": "Filistin Cd" }, "city": "Kayseri", "state": "Kahramanmaraş", "country": "Turkey", "postcode": "92468", "coordinates": { "latitude": "-11.8393", "longitude": "-90.4111" }, "timezone": { "offset": "-2:00", "description": "Mid-Atlantic" } }, "dob": { "date": new Date(), "age": 69 }, "picture": { "large": "https://randomuser.me/api/portraits/men/16.jpg", "medium": "https://randomuser.me/api/portraits/med/men/16.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/16.jpg" }, "nat": "TR" }] };


describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports: [MatCardModule,
        MatButtonModule,],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.user = expected.results[0] as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
