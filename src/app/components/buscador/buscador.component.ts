import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';
import { VillanosServices } from '../../servicios/villanos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: [
  ]
})

export class BuscadorComponent implements OnInit {
  villanos:any[] = [];


  constructor(private activatedRoute: ActivatedRoute,
              private _villanosService:VillanosServices,
              private _router:Router) { }


  ngOnInit() {
    this.activatedRoute.params.subscribe( params =>{

      this.villanos = this._villanosService.buscarVillano(params['termino']);
      console.log(this.villanos);
    });

  }

  verVillano( idx:number){
    this._router.navigate(['/villano',idx]);
  }

}
