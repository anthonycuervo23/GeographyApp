import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  query:string = '';
  hayError: boolean = false;
  countries: Country[] = []

  constructor(private paisService: PaisService) { }

 buscar(){
   this.hayError = false;
   console.log(this.query);

   this.paisService.buscarPais(this.query)
    .subscribe(resp => {
      this.countries = resp;
    }, (err)=>{
      this.countries = [];
      this.hayError = true;
    })
 }


}
