import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { LoaderComponent } from './loader/loader.component';

const routes: Route[] = [
  {
    path: '**',
    component: LoaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicroFrontendsRoutingModule {}
