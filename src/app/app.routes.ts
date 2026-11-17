import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HabitsComponent } from './pages/habits/habits.component';
import { StatsComponent } from './pages/stats/stats.component';
import { TipsComponent } from './pages/tips/tips.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Inicio | HabitTrack' },
  { path: 'habitos', component: HabitsComponent, title: 'Mis hábitos | HabitTrack' },
  { path: 'estadisticas', component: StatsComponent, title: 'Estadísticas | HabitTrack' },
  { path: 'consejos', component: TipsComponent, title: 'Consejos | HabitTrack' },
  { path: 'sobre', component: AboutComponent, title: 'Sobre HabitTrack' },
  { path: '**', redirectTo: '' }
];
