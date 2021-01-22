import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { VillanoComponent } from './components/villano/villano.component';
import { VillanosComponent } from './components/villanos/villanos.component';
import { BuscadorComponent } from './components/buscador/buscador.component';




//Rutas 
const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'about', component: AboutComponent },
    {path: 'villanos', component: VillanosComponent },
    {path: 'villano/:id', component: VillanoComponent },
    {path: 'buscar/:termino', component: BuscadorComponent },
    {path: '**', pathMatch: 'full', redirectTo: '' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});