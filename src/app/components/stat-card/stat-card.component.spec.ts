import { TestBed } from '@angular/core/testing';
import { StatCardComponent } from './stat-card.component';

describe('StatCardComponent', () => {
  it('muestra los datos que recibe', () => {
    const fixture = TestBed.createComponent(StatCardComponent);
    fixture.componentInstance.label = 'Completados';
    fixture.componentInstance.value = 3;
    fixture.componentInstance.note = 'Hoy';
    fixture.detectChanges();
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Completados');
    expect(text).toContain('3');
    expect(text).toContain('Hoy');
  });
});
