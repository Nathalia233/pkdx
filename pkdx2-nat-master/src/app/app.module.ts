import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { PokemonService } from './services/pokemon-service.service';
import { ListaPokemonComponent } from "./components/lista-pokemon/lista-pokemon.component";

@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [PokemonService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule,
        ListaPokemonComponent
    ]
})
export class AppModule { }
