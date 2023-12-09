import { Routes } from '@angular/router';
import {LivePlayingComponent} from "./components/live-playing/live-playing.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {RewardLoggingComponent} from "./components/reward-logging/reward-logging.component";
import {SettingsComponent} from "./components/settings/settings.component";
import {ClipManagingComponent} from "./components/clip-managing/clip-managing.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'live-playing', component: LivePlayingComponent },
  { path: 'reward-logging', component: RewardLoggingComponent },
  { path: 'clip-managing', component: ClipManagingComponent },
  { path: 'settings', component: SettingsComponent },
];
