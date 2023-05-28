import { Component, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/Interfaces/pokeapi';
import { Pokemon } from 'src/app/Interfaces/pokemon';
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-tarjeta-pokemon',
  templateUrl: './tarjeta-pokemon.component.html',
  styleUrls: ['./tarjeta-pokemon.component.css']
})

export class TarjetaPokemonComponent implements OnChanges{

  constructor(private pokemonService: PokemonService){}

  ngOnChanges(): void {
    this.extraerInformacion()
  }

  @Input() data?:Resultado;
  @Input() seleccionado: boolean = false;
  @Input() fullData?:Pokemon
  @Output() clickeado = new EventEmitter <string>()
  id:string="0";

  

  extraerInformacion(){
    if(this.data && this.data.url !== ""){
      this.id = this.data.url.substring(34, this.data.url.length-1);
      this.pokemonService.getById(this.id);
      return
    }
    if(this.fullData){
      this.id = this.fullData.species.url.substring(42, this.fullData.species.url.length-1);
      this.data = {
        name:this.fullData.name,
        url:""
      }
    }
  }
}
