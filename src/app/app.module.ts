import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WINDOW_TOKEN } from './app.tokens';

export function getWindow(): any {
  return window;
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NoopAnimationsModule],
  providers: [{ provide: WINDOW_TOKEN, useFactory: getWindow }],
  bootstrap: [AppComponent]
})
export class AppModule {}
