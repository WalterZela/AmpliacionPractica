import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  template: `
    <div class="empty-state">
      <div class="empty-icon">＋</div>
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
  `
})

export class EmptyStateComponent {

  // Textos que se muestran cuando no hay datos
  @Input() title = 'No hay elementos';
  @Input() message = 'Añade uno para empezar.';

}

