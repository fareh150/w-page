import { Routes } from '@angular/router';
import TimerComponent from './timer/timer.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'timer',
    component: TimerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
