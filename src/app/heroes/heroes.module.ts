import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MaterialModule } from '../angular-material/material.module';
import { HeroDetalhesComponent } from './components/hero-detalhes/hero-detalhes.component';
import { FormsModule } from '@angular/forms';
import { HeroesRoutingModule } from './heroes-routing.module';



@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetalhesComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HeroesRoutingModule,
    FormsModule,
  ]
})
export class HeroesModule { }
