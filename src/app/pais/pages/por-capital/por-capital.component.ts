import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  query:string = '';
  hayError: boolean = false;
  countries: Country[] = []

  constructor(private paisService: PaisService) { }

 buscar(query:string){
   this.hayError = false;
   this.query = query;
   console.log(this.query);

   this.paisService.buscarCapital(this.query)
    .subscribe(resp => {
      this.countries = resp;
    }, (err)=>{
      this.countries = [];
      this.hayError = true;
    })
 }

}
