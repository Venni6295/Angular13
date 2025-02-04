import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SeekingGiftComponent } from './components/seeking-gift/seeking-gift.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PressReleaseComponent } from './components/press-release/press-release.component';
import { SantaLettersComponent } from './components/santa-letters/santa-letters.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VolunteerComponent,
    SeekingGiftComponent,
    PhotosComponent,
    PressReleaseComponent,
    SantaLettersComponent,
    AboutUsComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
