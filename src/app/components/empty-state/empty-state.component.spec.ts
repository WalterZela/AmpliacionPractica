import { TestBed } from '@angular/core/testing';
import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  it('muestra el mensaje cuando no hay hábitos', () => {
    const fixture = TestBed.createComponent(EmptyStateComponent);
    fixture.componentInstance.title = 'Lista vacía';
    fixture.componentInstance.message = 'Añade un hábito';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Lista vacía');
    expect(fixture.nativeElement.textContent).toContain('Añade un hábito');
  });
});
