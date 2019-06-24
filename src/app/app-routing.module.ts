import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Example2Component } from './example2/example2.component';

const routes: Routes = [
  //{ path: 'example1', component: Example1Component },
  { path: 'example2',
    redirectTo: '/',
  },
  { path: '',
    component: Example2Component,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
