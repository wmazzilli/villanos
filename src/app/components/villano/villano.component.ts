import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'; //paquete
import { VillanosServices } from '../../servicios/villanos.service';


@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html'
})
export class VillanoComponent implements OnInit {
  villano:any = {};
  constructor(
    private activatedRoute:ActivatedRoute,
    private _villanosService : VillanosServices      
  ) { 

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id']);
       this.villano = this._villanosService.getVillano(params['id'])
       console.log(this.villano);
      });


  }

  ngOnInit(): void {
  }

}
 