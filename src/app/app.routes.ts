import { Routes } from '@angular/router';
import {HomePageComponent} from "./components/home-page/home-page.component";
import { LivePlayingComponent } from './components/live-playing/live-playing.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'live-playing', component: LivePlayingComponent}
]
