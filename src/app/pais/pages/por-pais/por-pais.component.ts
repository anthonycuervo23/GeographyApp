import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor: pointer;
    }
  `
  ]
})
export class PorPaisComponent {

  query:string = '';
  hayError: boolean = false;
  mostrarSugerencias:boolean = false;
  countries: Country[] = []
  paisesSugeridos: Country[] = []

  constructor(private paisService: PaisService) { }

 buscar(query:string){
   this.mostrarSugerencias = false;
   this.hayError = false;
   this.query = query;
   console.log(this.query);

   this.paisService.buscarPais(this.query)
    .subscribe(resp => {
      this.countries = resp;
    }, (err)=>{
      this.countries = [];
      this.hayError = true;
    })
 }

 sugerencias(query:string){
   this.hayError = false;
   this.query = query;
   this.mostrarSugerencias = true;

   this.paisService.buscarPais(query)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => {
      this.paisesSugeridos = [];
    });

 }

 buscarSugerido(query:string){
  this.buscar(query);

 }


}
