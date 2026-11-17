import { Component } from '@angular/core';
import { HabitService } from '../../services/habit.service';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { Habit } from '../../models/habit.model';

@Component({
  standalone: true,
  imports: [PageHeaderComponent, StatCardComponent, ProgressBarComponent],
  template: `
    <app-page-header title="Estadísticas" subtitle="Una vista rápida de cómo va tu día." />
    <section class="stats-grid stats-grid-large">
      <app-stat-card label="Hábitos creados" [value]="habits.length" note="Hábitos en tu lista" />
      <app-stat-card label="Completados" [value]="completed" note="Marcados hoy" />
      <app-stat-card label="Por completar" [value]="habits.length - completed" note="Todavía estás a tiempo" />
    </section>
    <section class="form-panel stats-panel">
      <p class="eyebrow">OBJETIVO DIARIO</p>
      <h2>Tu progreso de hoy</h2>
      <p class="subtitle">Completa tus hábitos para acercarte al 100%.</p>
      <app-progress-bar [value]="progress" label="Progreso de hábitos" />
      <p class="large-progress">{{ progress }}<span>%</span></p>
      @if (progress === 100 && habits.length > 0) {
        <p class="success-message">¡Has completado todos tus hábitos de hoy!</p>
      } @else {
        <p class="muted">Cada hábito que completas suma. Sigue a tu ritmo.</p>
      }
    </section>
    <section class="tip-panel">
      <span class="tip-symbol">✦</span>
      <div><h3>Recuerda</h3><p>La constancia importa más que hacerlo todo perfecto. Empieza por un paso pequeño.</p></div>
    </section>
  `
})
export class StatsComponent {
  habits: Habit[] = [];

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits();
  }

  // Cuenta los hábitos completados
  get completed(): number {
    return this.habits.filter((habit) => habit.completedToday).length;
  }

  // Calcula el porcentaje de hábitos completados
  get progress(): number {
    if (this.habits.length === 0) return 0;
    return Math.round(this.completed / this.habits.length * 100);
  }
}
