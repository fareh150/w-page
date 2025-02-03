import { Routes } from '@angular/router';
import TimerComponent from './timer/timer.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
  {
    path: '',
    component: TimerComponent
  , data: { date: '2023-12-31' }
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
