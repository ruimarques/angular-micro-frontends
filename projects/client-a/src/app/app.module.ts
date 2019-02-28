import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'microapp/sync/:guid',
        component: PageComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(AppComponent, {
      injector: this.injector
    });
    customElements.define('app-client-a', element);
  }
}
