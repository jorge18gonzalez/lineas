import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ MovilComponent } from './movil/movil.component';
import{ QuienesComponent} from './quienes/quienes.component';
import{StockComponent} from './stock/stock.component';



const routes: Routes = [
  {path: '' , component: StockComponent},
  {}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
