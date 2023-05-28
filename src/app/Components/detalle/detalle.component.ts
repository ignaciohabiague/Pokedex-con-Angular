import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/app/Interfaces/pokemon';
import { PokemonService } from 'src/app/Services/pokemon.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnChanges {

  @Input() pokemon?: Pokemon;
  @Input() abierto:boolean=false;
  @Output() clicked=new EventEmitter();
  descripcion:string = ""

  constructor(private pokemonService:PokemonService){

  }

  ngOnChanges(): void {
    if(this.pokemon){
      this.pokemonService.getDescripcion(this.pokemon?.id).then(res =>{
        this.descripcion = res
      });
    };
  };
}
