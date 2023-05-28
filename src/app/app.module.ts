import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { FotoPokemonComponent } from './Components/foto-pokemon/foto-pokemon.component';
import { TarjetaPokemonComponent } from './Components/tarjeta-pokemon/tarjeta-pokemon.component';
import { DetalleComponent } from './Components/detalle/detalle.component';
import { LoginComponent } from './Components/login/login.component';
import { RegistroComponent } from './Components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FotoPokemonComponent,
    TarjetaPokemonComponent,
    DetalleComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
