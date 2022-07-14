import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MusicModule } from 'src/music/music.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemporaryComponent } from './temporary/temporary.component';

@NgModule({
  declarations: [
    AppComponent,
    TemporaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MusicModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
