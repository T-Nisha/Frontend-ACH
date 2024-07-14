import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateplayerComponent } from './components/createplayer/createplayer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './update/update.component';
import { SearchplayerComponent } from './searchplayer/searchplayer.component';
import { PlayerlistComponent } from './components/playerlist/playerlist.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateplayerComponent,
    PlayerlistComponent,
    UpdateComponent,
    SearchplayerComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
