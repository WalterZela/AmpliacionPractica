import { TestBed } from '@angular/core/testing';
import { HabitService } from './habit.service';

describe('HabitService', () => {
  let service: HabitService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitService);
  });

  it('should create the service', () => {
    expect(service).toBeTruthy();
  });

  it('should add a habit', () => {
    const initialCount = service.getHabits().length;
    service.addHabit('Estudiar', 'Aprendizaje', 'Cada día');
    expect(service.getHabits().length).toBe(initialCount + 1);
  });

  it('should toggle a habit', () => {
    const firstHabit = service.getHabits()[0];
    service.toggleHabit(firstHabit.id);
    expect(service.getHabits()[0].completedToday).toBe(!firstHabit.completedToday);
  });

  it('should delete a habit', () => {
    const firstHabit = service.getHabits()[0];
    service.deleteHabit(firstHabit.id);
    expect(service.getHabits().some((habit) => habit.id === firstHabit.id)).toBe(false);
  });
});
