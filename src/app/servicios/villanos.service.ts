import {Injectable} from '@angular/core';


export interface Villanos{
    nombre:string; 
    bio:string;
    img:string;
    aparicion:string;
    casa:string;
    idx?:number;
};

@Injectable()
export class VillanosServices{

    private villanos:Villanos[] = 
    [
      {
        nombre: "Lex-Luthor",
        bio: "El archienemigo de Superman nació en 1940 de la mano de Jerry Siegel y Joe Shuster. Luthor se caracteriza por ser un villano sin poderes. Aunque, eso sí, tiene mucho dinero. Y al fin y al cabo el dinero da poder, ¿no?",
        img: "assets/img/lexluthor.png",
        aparicion: "1940-11-01",
        casa:"DC"
      },
      {
        nombre: "Darkseid",
        bio: "Darkseid es uno de los personajes más poderosos del mundo DC. Se trata de un villano extraterrestre creado por Jack Kirby en 1970. ¿Sus poderes? Fuerza sobrehumana, inteligencia sobrenatural y además se regenera cada vez que le hieren.",
        img: "assets/img/darkseid.png",
        aparicion: "1970-05-01",
        casa:"DC"
      },
      {
        nombre: "Joker",
        bio: "El Joker (Conocido como el Guasón) es un personaje ficticio, un supervillano que aparece en los cómics publicados por la editorial estadounidense DC cómics. Su nombre en español quiere decir Bromista, aunque también hace referencia a un naipe de la baraja inglesa, equivalente al comodín.",
        img: "assets/img/joker.png",
        aparicion: "1940-01-01",
        casa: "DC"
      },
      {
        nombre: "Kingpin",
        bio: "Kingpin (Wilson Fisk) es un supervillano ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue creado por Stan Lee y John Romita Sr., y apareció por primera vez en The Amazing Spider-Man # 50  1967",
        img: "assets/img/kingpin.png",
        aparicion: "1967-07-01",
        casa:"Marvel"
      },
      {
        nombre: "Ultrón",
        bio: "Ultron es un supervillano ficticio que aparece en los cómics publicados por Marvel Comics. Un robot consciente de sí mismo y altamente inteligente creado por Hank Pym, el personaje generalmente se representa como un oscuro reflejo de su creador y le guarda un fuerte rencor. El objetivo de Ultron de destruir a la humanidad a menudo lo ha llevado a entrar en conflicto con los Vengadores, quienes siempre lograron frustrarlo y destruirlo, pero regresaría una y otra vez. Aunque por lo general controla una legión de drones sin sentido conocidos como Ultron Centinelas para ayudarlo a lograr sus objetivos, Ultron también ha sido parte de varios equipos de supervillanos. El personaje se destaca por ser el primero en manejar el adamantium de aleación de metal ficticio1​ y por su creación (en la historia) del personaje de Marvel Comics, Visión",
        img: "assets/img/ultron.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Loki",
        bio: "El dios nórdico de las Mentiras y el Engaño. Y el hermano adoptivo de Thor según la mitología de Marvel y también su mayor rival clásico. Loki es un medio gigante de hielo criado en Asgard. Debido a su ascendencia, siempre fue tratado con desdén por los asgardianos, a pesar de ser criado como hijo de Odín y hermano de Thor. Esto creó un gran resentimiento en el joven Loki, lo cual le hizo tratar de humillar a Thor una y otra vez, para ganar el favor de su padre y así poder ser alguna vez su heredero. Huelga decir que fracasó y acabó falleciendo en los eventos de Asedio.",
        img: "assets/img/loki.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      }
  
    ];

    constructor(){
        console.log('Listo para usar');
    }


    getVillanos(){
        return this.villanos;
    }

    getVillano(idx:any)
    {
      return this.villanos[idx];
    }

    buscarVillano(termino:string){
      
      let villanosArr:Villanos[] = [];
      termino = termino.toLowerCase();


      for(let i= 0 ; i< this.villanos.length ; i++){
          let villano = this.villanos[i];
          let nombre = villano.nombre.toLowerCase();
          if(nombre.indexOf(termino) >= 0 )  {
            villano.idx =i;
            villanosArr.push(villano);
          }
      }

      return villanosArr;
    }
    
}