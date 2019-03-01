import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  template: `
    <router-outlet></router-outlet>
  `,
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input()
  guid: string;

  title = 'client-a';

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.initialNavigation();

    // Maybe this is not the best approach but the idea is
    // to use this guid to load some data from the server
    // and display it in the PageComponent:

    this.router.navigateByUrl(`/microapp/client-a/${this.guid}`);

    console.log('load : ', this.guid);
  }
}
