import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../../models/habit.model';

@Component({
  selector: 'app-habit-card',
  standalone: true,
  template: `
    <article class="habit-card" [class.completed]="habit.completedToday">
      <div class="habit-icon" aria-hidden="true">{{ iconForCategory(habit.category) }}</div>
      <div class="habit-info">
        <h3>{{ habit.name }}</h3>
        <p>{{ habit.category }} · {{ habit.frequency }}</p>
      </div>
      <div class="habit-actions">
        <button
          class="button button-small"
          [class.button-done]="habit.completedToday"
          type="button"
          (click)="toggle.emit(habit.id)">
          {{ habit.completedToday ? 'Completado' : 'Marcar hecho' }}
        </button>
        <button class="icon-button" type="button" (click)="remove.emit(habit.id)" [attr.aria-label]="'Eliminar ' + habit.name">×</button>
      </div>
    </article>
  `
})
export class HabitCardComponent {

  // Recibe los datos del hábito
  @Input({ required: true }) habit!: Habit;

  // Eventos para completar o eliminar un hábito
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  // Devuelve un icono según la categoría
  iconForCategory(category: string): string {
    if (category === 'Salud') return '♡';
    if (category === 'Aprendizaje') return '↗';
    if (category === 'Actividad') return '⌁';
    return '✳';
  }
}
