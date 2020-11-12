import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{MovilComponent}from './movil/movil.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
