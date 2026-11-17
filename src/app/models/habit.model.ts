/** Representa un hábito que el usuario quiere practicar. */
export interface Habit {
  id: number;
  name: string;
  category: string;
  frequency: string;
  completedToday: boolean;
}
