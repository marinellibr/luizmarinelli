import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SocialComponent } from './social/social.component';
import { CardSocialComponent } from './card-social/card-social.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SocialComponent,
    CardSocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
