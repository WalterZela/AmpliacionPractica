import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  template: `
    <article class="stat-card">
      <span class="stat-label">{{ label }}</span>
      <strong class="stat-value">{{ value }}</strong>
      <span class="stat-note">{{ note }}</span>
    </article>
  `
})
export class StatCardComponent {

  // Datos que se muestran en la tarjeta
  @Input() label = '';
  @Input() value: string | number = '';
  @Input() note = '';

}
