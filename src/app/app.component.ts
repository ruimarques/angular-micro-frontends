import { Component, Inject } from '@angular/core';
import { Location } from '@angular/common';
import { WINDOW_TOKEN } from './app.tokens';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-micro-frontends';
  document;

  constructor(
    public location: Location,
    @Inject(WINDOW_TOKEN) private window: any
  ) {}

  hackWindow(path: string) {
    console.log(path);
    this.window.location = path;
  }
}
