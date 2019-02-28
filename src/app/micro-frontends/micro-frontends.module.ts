import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { MicroFrontendsRoutingModule } from './micro-frontends-routing.module';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, MicroFrontendsRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MicroFrontendsModule {}
