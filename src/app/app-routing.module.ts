import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ MovilComponent } from './movil/movil.component';
import{ QuienesComponent} from './quienes/quienes.component';
import{ StockComponent } from './stock/stock.component';



const routes: Routes = [
  {path: '' , component: StockComponent},
  {path: 'equipo/:id' , component:MovilComponent},
  {path: 'quienes' , component: QuienesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
