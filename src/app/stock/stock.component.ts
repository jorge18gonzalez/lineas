import { Component, OnInit } from '@angular/core';
import { TELEFONOS} from '../telefonos.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  telefonos: any = TELEFONOS;

  constructor() { }

  ngOnInit(): void {
  }

}
