import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { LivePlayingComponent } from './components/live-playing/live-playing.component';
import { ClipManagingComponent } from './components/clip-managing/clip-managing.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'live-playing', component: LivePlayingComponent},
  { path: 'clip-manager', component: ClipManagingComponent}
]
