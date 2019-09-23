# LotjTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Law of the Jungle Test

### Outline:
Create an Angular application that interacts with a public API, solves the "Noahs Ark" problem and displays the solution.
The "Noah's Ark" problem requires you to create a pair of people (one male, one female) from each nationality/country.

### Requirements: 
You will be pulling data from the [Random User Public API](https://randomuser.me/)
For each country/nationality available on the Random User public API (read the documentation) in **DESCENDING** alphabetical order, create a pairing of User Profiles containing basic user information (title, first name, last name, gender, location, date of birth, picture)

In your implementation you must:
- Correctly structure the declarations/imports for existing components, pipes and services in the existing app module and shared module
- Implement the User rest service to make HTTP GET requests to the API, and construct and return User class objects
- Implement the App component to retrieve User objects from the User rest service and display a list of descending alphabetically sorted UserProfiles.
- Implement the UserProfile component to take a User object as input and display a Google Material card for the user. 
- Implement the Alphabetically sorting pipe to sort the list of nationalities in descending order.

### Styling/design:
- Angular Google Material has been included in the dependencies of the project. Import any additionally needed modules, and use these to design a ['Google Card'](https://material.angular.io/components/card/examples) styled layout of a user profile.
Documentation for how to use Angular Material Design components can be found [here](https://material.angular.io/guides) 

### Testing:
- The code should be tested.

### Submission
- Save your work, zip the entire project of the files (except for the node modules folder) and email to alvin@lotj.com 