import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TELEFONOS} from '../telefonos.model';

@Component({
  selector: 'app-movil',
  templateUrl: './movil.component.html',
  styleUrls: ['./movil.component.css']
})
export class MovilComponent implements OnInit {
  infoTelefono: any;

  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap
    .subscribe((params : ParamMap )=>{
      let id =+ params.get('id');
      this.infoTelefono =TELEFONOS.find(item => item.id === id);
    });
  }

}
