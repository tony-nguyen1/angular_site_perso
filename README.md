# AngularSitePerso

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
ng serve --open
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.
ng build --optimization --output-path docs

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Deploiement

'ng build --output-path docs'
Puis aller dans Settings > Pages. Ensuite changer /root en /docs dans Branches.

https://stackoverflow.com/questions/63862046/angular-get-404-after-reload-with-github-page

ng build --optimization --output-path docs && git status && git add . && git commit -m "style contact portefolio mobile screen" && git push origin main && git push deploy main

ng build --output-path docs --base-href /angular_site_perso/