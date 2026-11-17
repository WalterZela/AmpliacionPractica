import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HabitService } from '../../services/habit.service';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { StatCardComponent } from '../../components/stat-card/stat-card.component';
import { HabitCardComponent } from '../../components/habit-card/habit-card.component';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar.component';
import { Habit } from '../../models/habit.model';

@Component({
  standalone: true,
  imports: [RouterLink, PageHeaderComponent, StatCardComponent, HabitCardComponent, ProgressBarComponent],
  template: `
    <app-page-header eyebrow="TU ESPACIO PERSONAL" title="Un día a la vez."
      subtitle="Los hábitos pequeños pueden crear cambios importantes." />
    <section class="welcome-panel">
      <div>
        <p class="eyebrow light-eyebrow">TU PROGRESO DE HOY</p>
        <h2>Haz que hoy cuente.</h2>
        <p>Completa tus hábitos a tu ritmo. Lo importante es mantener la constancia.</p>
        <a class="button button-light" routerLink="/habitos">Ver mis hábitos <span>→</span></a>
      </div>
      <div class="welcome-progress">
        <div class="progress-circle"><strong>{{ progress }}%</strong><span>completado</span></div>
      </div>
    </section>

    <section class="section-block">
      <div class="section-title">
        <div><p class="eyebrow">RESUMEN</p><h2>Tu día en números</h2></div>
      </div>
      <div class="stats-grid">
        <app-stat-card label="Hábitos en total" [value]="habits.length" note="Tu lista actual" />
        <app-stat-card label="Completados hoy" [value]="completed" note="Buen trabajo" />
        <app-stat-card label="Pendientes" [value]="habits.length - completed" note="Puedes hacerlos ahora" />
      </div>
    </section>

    <section class="section-block">
      <div class="section-title">
        <div><p class="eyebrow">SIGUE ADELANTE</p><h2>Hábitos de hoy</h2></div>
        <a class="text-link" routerLink="/habitos">Ver todos →</a>
      </div>
      <div class="habit-list">
        @for (habit of habits.slice(0, 3); track habit.id) {
          <app-habit-card [habit]="habit" (toggle)="toggleHabit($event)" (remove)="deleteHabit($event)" />
        }
      </div>
      <div class="progress-summary"><span>Progreso diario</span><app-progress-bar [value]="progress" label="Progreso diario" /></div>
    </section>
  `
})

export class HomeComponent {

  habits: Habit[] = [];

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits();
  }

  // Cuenta los hábitos completados
  get completed(): number {
    return this.habits.filter((habit) => habit.completedToday).length;
  }

  // Calcula el porcentaje de progreso
  get progress(): number {
    return this.habits.length === 0
      ? 0
      : Math.round(this.completed / this.habits.length * 100);
  }

  // Marca o desmarca un hábito
  toggleHabit(id: number): void {
    this.habitService.toggleHabit(id);
    this.refresh();
  }

  // Elimina un hábito
  deleteHabit(id: number): void {
    this.habitService.deleteHabit(id);
    this.refresh();
  }

  // Actualiza la lista de hábitos
  private refresh(): void {
    this.habits = this.habitService.getHabits();
  }
}

