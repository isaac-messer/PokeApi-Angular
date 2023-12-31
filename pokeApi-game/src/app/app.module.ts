import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { SideMenuBarComponent } from './components/side-menu-bar/side-menu-bar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GameScreenComponent } from './components/game-screen/game-screen.component';
import { PokeSelectComponent } from './components/poke-select/poke-select.component';
import { MaterialModule } from './modules/material.module';
import { SearchResultsScreenComponent } from './components/search-results-screen/search-results-screen.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideMenuBarComponent,
    SearchBarComponent,
    GameScreenComponent,
    PokeSelectComponent,
    SearchResultsScreenComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
