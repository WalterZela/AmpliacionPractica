import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-header',
  standalone: true,
  template: `
    <div class="page-heading">
      <div>
        <p class="eyebrow">{{ eyebrow }}</p>
        <h1>{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
      </div>
      <ng-content />
    </div>
  `
})

export class PageHeaderComponent {

  // Textos que aparecen en la cabecera de cada página
  @Input() title = '';
  @Input() subtitle = '';
  @Input() eyebrow = 'HABITTRACK';

}

