import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  template: `
    <div class="progress-wrap">
      <div class="progress-track" role="progressbar"
           [attr.aria-valuenow]="value" aria-valuemin="0" aria-valuemax="100"
           [attr.aria-label]="label">
        <div class="progress-fill" [style.width.%]="safeValue"></div>
      </div>
      <span class="progress-number">{{ safeValue }}%</span>
    </div>
  `
})

export class ProgressBarComponent {

  // Valor del progreso y texto de la barra
  @Input() value = 0;
  @Input() label = 'Progreso';

  // Evita que el porcentaje sea menor que 0 o mayor que 100
  get safeValue(): number {
    return Math.max(0, Math.min(100, this.value));
  }
}

