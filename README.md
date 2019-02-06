# [PizzaPwa](https://owlruslan.github.io/angular-pizza-ngrx-pwa)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.
##### Work in progress
## [Demo](https://owlruslan.github.io/angular-pizza-ngrx-pwa)
## User details
![Page one](https://raw.githubusercontent.com/owlruslan/pizza-pwa/master/page_1.gif "Page one")
## Pizza creator
![Page two](https://raw.githubusercontent.com/owlruslan/pizza-pwa/master/page_2.gif "Page two")

### Features

* Angular v7
* NGRX
* Component architecture
* Reactive Form APIs
* FormGroups
* FormControls
* ValueChanges Observable
* Custom FormControls + ControlValueAccessor

## Structure
```
app.module.ts
└── pizza-module.ts
    ├── components
    │   ├── pizza-form
    │   ├── pizza-form-details
    │   ├── pizza-form-steps
    │   ├── pizza-form-summary
    │   ├── pizza-price
    │   ├── pizza-toppings
    │   └── pizza-view
    ├── containers
    │   └── pizza-container
    ├── models
    ├── services
    ├── store
    │   ├── actions
    │   ├── effects
    │   ├── reducers
    │   ├── selectors
    │   └── state
    └── validators
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# See also
* [Angular-pizza-creator](https://github.com/toddmotto/angular-pizza-creator)
* [Angular: NGRX a clean and clear Introduction](https://medium.com/frontend-fun/angular-ngrx-a-clean-and-clear-introduction-4ed61c89c1fc)
