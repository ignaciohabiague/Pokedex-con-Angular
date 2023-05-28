import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/Interfaces/pokeapi';
import { Pokemon } from 'src/app/Interfaces/pokemon'
import { PokemonService } from 'src/app/Services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private pokemonService:PokemonService){}
  @ViewChild('tarjetas') tarjetasElement!:ElementRef;

  listaPokemon:Resultado[] = []

  pagina:number=1;
  cargando:boolean=false;
  pokemonSeleccionado?:Pokemon;
  detalle: boolean = false;

  ngOnInit(): void {
    this.cargarLista();
    this.pokemonService.getById('1');
  }

  async cargarLista(){
    this.cargando=true;
    this.listaPokemon = [...this.listaPokemon, ... await this.pokemonService.getByPage(this.pagina)];
    console.log(this.listaPokemon);
    this.pagina++
    this.cargando=false
  }

  onScroll(e:any){
    if(this.cargando=true) return;
    console.log(e)
    if(
      Math.round(
        this.tarjetasElement.nativeElement.clientHeight + this.tarjetasElement.nativeElement.scrollTop
      )===e.srcElement.scrollHeight){
      this.cargarLista()
    }

  }

  async tarjetaClickeada(id:string){
    this.pokemonSeleccionado = await this.pokemonService.getById(id)
  }

  cambiarEstadoDetalle(){
    if(this.pokemonSeleccionado) this.detalle = !this.detalle;
    console.log(this.detalle)
  }
}
