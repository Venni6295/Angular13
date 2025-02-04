import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SeekingGiftComponent } from './components/seeking-gift/seeking-gift.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PressReleaseComponent } from './components/press-release/press-release.component';
import { SantaLettersComponent } from './components/santa-letters/santa-letters.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'volunteer', component: VolunteerComponent, pathMatch: 'full' },
  { path: 'seekingGift', component: SeekingGiftComponent, pathMatch: 'full' },
  { path: 'aboutUs', component: AboutUsComponent, pathMatch: 'full' },
  { path: 'photos', component: PhotosComponent, pathMatch: 'full' },
  { path: 'pressRelease', component: PressReleaseComponent, pathMatch: 'full' },
  { path: 'santaLetters', component: SantaLettersComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
