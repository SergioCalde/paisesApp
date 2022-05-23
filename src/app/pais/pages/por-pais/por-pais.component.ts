import { Component} from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string) {

    this.hayError = false;
    this.termino = termino;
   
    // this.paisService.buscarPais( this.termino )
    //   .subscribe( (resp) => {
    //     console.log(resp);
    //   }, (err) => {
    //     console.log('Error');
    //     console.log(err);
    //   });


      this.paisService.buscarPais( termino )
          .subscribe(
            {
              next: (paises) => {
                console.log(paises);
                this.paises = paises;
              },
              error: (e) => {
                this.hayError = true;
                this.paises = []
              }
            }
          )

  }
}
