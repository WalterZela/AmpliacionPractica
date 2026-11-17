import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <div class="app-shell">
      <header class="topbar">
        <a class="brand" routerLink="/" aria-label="HabitTrack, ir al inicio">
          <span class="brand-mark">H</span>
          <span>Habit<span class="brand-light">Track</span></span>
        </a>
        <nav aria-label="Navegación principal">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
          <a routerLink="/habitos" routerLinkActive="active">Mis hábitos</a>
          <a routerLink="/estadisticas" routerLinkActive="active">Estadísticas</a>
          <a routerLink="/consejos" routerLinkActive="active">Consejos</a>
          <a routerLink="/sobre" routerLinkActive="active">Sobre el proyecto</a>
        </nav>
      </header>
      <main class="main-content">
        <router-outlet />
      </main>
      <footer class="footer">
        <span>HabitTrack</span>
        <span>Pequeños pasos, grandes cambios.</span>
      </footer>
    </div>
  `
})
export class AppComponent {}
