import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { SkiresortsComponent } from './skiresorts/skiresorts.component';
import { SkiResortPanelComponent } from './skiresorts/ski-resort-panel/ski-resort-panel.component';
import { WeatherComponent } from './skiresorts/weather/weather.component';
import { TracksComponent } from './skiresorts/tracks/tracks.component';
import { SkiPassComponent } from './skiresorts/ski-pass/ski-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    SkiresortsComponent,
    SkiResortPanelComponent,
    WeatherComponent,
    TracksComponent,
    SkiPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
