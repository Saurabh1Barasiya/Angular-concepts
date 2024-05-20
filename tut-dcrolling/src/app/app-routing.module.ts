import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollOffset: [0, 64] })],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
