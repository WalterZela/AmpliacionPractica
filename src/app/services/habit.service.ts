import { Injectable } from '@angular/core';
import { Habit } from '../models/habit.model';

const STORAGE_KEY = 'habittrack-habits';

/** Guarda y administra los hábitos de la aplicación. */
@Injectable({ providedIn: 'root' })
export class HabitService {
  private habits: Habit[] = this.loadHabits();

  /** Devuelve una copia de los hábitos para evitar modificar la lista directamente. */
  getHabits(): Habit[] {
    return this.habits.map((habit) => ({ ...habit }));
  }

  /** Añade un hábito nuevo y lo guarda en el navegador. */
  addHabit(name: string, category: string, frequency: string): void {
    const newHabit: Habit = {
      id: Date.now(),
      name: name.trim(),
      category,
      frequency,
      completedToday: false
    };
    this.habits = [...this.habits, newHabit];
    this.saveHabits();
  }

  /** Cambia el estado de realización de un hábito. */
  toggleHabit(id: number): void {
    this.habits = this.habits.map((habit) =>
      habit.id === id ? { ...habit, completedToday: !habit.completedToday } : habit
    );
    this.saveHabits();
  }

  /** Elimina el hábito cuyo identificador se recibe. */
  deleteHabit(id: number): void {
    this.habits = this.habits.filter((habit) => habit.id !== id);
    this.saveHabits();
  }

  private loadHabits(): Habit[] {
    const savedHabits = localStorage.getItem(STORAGE_KEY);
    if (savedHabits) {
      try {
        return JSON.parse(savedHabits) as Habit[];
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }

    return [
      { id: 1, name: 'Beber agua', category: 'Salud', frequency: 'Cada día', completedToday: true },
      { id: 2, name: 'Leer 10 páginas', category: 'Aprendizaje', frequency: 'Cada día', completedToday: false },
      { id: 3, name: 'Caminar 20 minutos', category: 'Actividad', frequency: 'Cada día', completedToday: false }
    ];
  }

  private saveHabits(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.habits));
  }
}
