import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  declarations: [AppComponent, PageComponent, Page2Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'microapp/client-a/page2',
          component: Page2Component
        },
        {
          path: 'microapp/client-a/:guid',
          component: PageComponent
        }
      ],
      { useHash: true }
    )
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [AppComponent]
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
