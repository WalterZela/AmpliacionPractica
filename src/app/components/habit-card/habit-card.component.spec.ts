import { TestBed } from '@angular/core/testing';
import { HabitCardComponent } from './habit-card.component';

describe('HabitCardComponent', () => {
  it('muestra el hábito y emite su id al completarlo', () => {
    const fixture = TestBed.createComponent(HabitCardComponent);
    const component = fixture.componentInstance;
    component.habit = { id: 5, name: 'Estudiar', category: 'Aprendizaje', frequency: 'Cada día', completedToday: false };
    spyOn(component.toggle, 'emit');
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('Estudiar');
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.button-small');
    button.click();
    expect(component.toggle.emit).toHaveBeenCalledWith(5);
  });

  it('emite el id al eliminar un hábito', () => {
    const fixture = TestBed.createComponent(HabitCardComponent);
    const component = fixture.componentInstance;
    component.habit = { id: 7, name: 'Leer', category: 'Personal', frequency: 'Cada día', completedToday: false };
    spyOn(component.remove, 'emit');
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.icon-button');
    button.click();
    expect(component.remove.emit).toHaveBeenCalledWith(7);
  });
});
