import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from "@ngrx/effects";

import { environment } from './../environments/environment';

//containers aka smart components
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './containers/app.component';
import { RecentSidebarComponent } from "./containers/recent-bar.component";
import { PlayListComponent } from './containers/playlist.component';
import { SearchComponent } from './containers/search.component';
import { ViewTrackComponent } from './containers/view-track.component';

//dumb components
import { ComponentsModule } from './components/index';

//services
import { SpotifySearchService } from './services/spotify.service';
import { AuthService } from "./services/auth.service";
import { AuthenticatedGuard } from "./services/authenticated.guard";
import { reducers } from "./reducers/index";


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule,

    StoreModule.forRoot(reducers),
    environment.production ?  [] : StoreDevtoolsModule.instrument({ maxAge: 50 }),
  ],
  declarations: [
    AppComponent,
    RecentSidebarComponent,
    PlayListComponent,
    SearchComponent,
    ViewTrackComponent
  ],
  providers: [SpotifySearchService, AuthService, AuthenticatedGuard],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
