import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HabitService } from '../../services/habit.service';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { HabitCardComponent } from '../../components/habit-card/habit-card.component';
import { EmptyStateComponent } from '../../components/empty-state/empty-state.component';
import { Habit } from '../../models/habit.model';

@Component({
  standalone: true,
  imports: [FormsModule, PageHeaderComponent, HabitCardComponent, EmptyStateComponent],
  template: `
    <app-page-header title="Mis hábitos" subtitle="Añade hábitos y marca los que hayas completado." />
    <section class="form-panel">
      <h2>Añadir un hábito</h2>
      <form (ngSubmit)="addHabit()">
        <div class="form-grid">
          <label>Nombre del hábito
            <input name="name" [(ngModel)]="name" required minlength="2" maxlength="60"
              placeholder="Ej. Estudiar 30 minutos" />
          </label>
          <label>Categoría
            <select name="category" [(ngModel)]="category">
              <option>Salud</option><option>Aprendizaje</option><option>Actividad</option><option>Personal</option>
            </select>
          </label>
          <label>Frecuencia
            <select name="frequency" [(ngModel)]="frequency">
              <option>Cada día</option><option>Entre semana</option><option>Cada semana</option>
            </select>
          </label>
        </div>
        <button class="button button-primary" type="submit" [disabled]="name.trim().length < 2">+ Añadir hábito</button>
      </form>
    </section>

    <section class="section-block">
      <div class="section-title">
        <div><p class="eyebrow">TU LISTA</p><h2>{{ habits.length }} hábitos</h2></div>
        <span class="status-pill">{{ completed }} completados hoy</span>
      </div>
      @if (habits.length > 0) {
        <div class="habit-list">
          @for (habit of habits; track habit.id) {
            <app-habit-card [habit]="habit" (toggle)="toggleHabit($event)" (remove)="deleteHabit($event)" />
          }
        </div>
      } @else {
        <app-empty-state title="Tu lista está vacía" message="Añade tu primer hábito con el formulario de arriba." />
      }
    </section>
  `
})

export class HabitsComponent {

  habits: Habit[] = [];

  // Datos del formulario
  name = '';
  category = 'Salud';
  frequency = 'Cada día';

  constructor(private habitService: HabitService) {
    this.habits = this.habitService.getHabits();
  }

  // Cuenta los hábitos completados
  get completed(): number {
    return this.habits.filter((habit) => habit.completedToday).length;
  }

  // Añade un hábito nuevo
  addHabit(): void {
    if (this.name.trim().length < 2) return;

    this.habitService.addHabit(this.name, this.category, this.frequency);
    this.name = '';
    this.refresh();
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

  // Actualiza la lista después de hacer cambios
  private refresh(): void {
    this.habits = this.habitService.getHabits();
  }
}

