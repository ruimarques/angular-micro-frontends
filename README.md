# AngularMicroFrontends

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Unleash the (broken) magic

`$ npm run watch:clienta`

or

`$ npm run build:clienta`

then

`$ ng serve`

## Routing issue:

- Navigate to page 2 (which in fact is inside micro frontend "client-a")
- Then Click link "routerLink to client-a". Should take you to client-a "home" (PageComponent) but what actually happens is that the url is updated but it does not navigate to client-a "home" (PageComponent).
