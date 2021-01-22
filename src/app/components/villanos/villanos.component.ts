import { Component, OnInit } from '@angular/core';
import { VillanosServices, Villanos } from '../../servicios/villanos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styles: [
  ]
})
export class VillanosComponent implements OnInit {
  villanos:Villanos[] = [];
  constructor(
  private _villanosService:VillanosServices,
  private _router:Router
  ) { }

  ngOnInit(): void {
    this.villanos = this._villanosService.getVillanos();
  }

  verVillano( idx:number){
    // console.log(idx);
    this._router.navigate(['/villano',idx]);
  }

}
