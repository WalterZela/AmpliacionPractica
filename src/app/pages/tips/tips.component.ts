import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Consejos prácticos" subtitle="Ideas sencillas para que tus hábitos sean más fáciles de mantener." />
    <div class="tips-grid">
      <article class="tip-card"><span class="tip-number">01</span><h2>Empieza pequeño</h2><p>Elige una acción tan sencilla que te resulte fácil repetirla. Puedes aumentar la dificultad más adelante.</p></article>
      <article class="tip-card"><span class="tip-number">02</span><h2>Asocia el hábito</h2><p>Une el nuevo hábito a una rutina que ya tengas, como leer después de desayunar.</p></article>
      <article class="tip-card"><span class="tip-number">03</span><h2>Hazlo visible</h2><p>Deja preparado lo que necesites. Reducir los pasos facilita empezar.</p></article>
      <article class="tip-card"><span class="tip-number">04</span><h2>Revisa tu progreso</h2><p>Al final del día, comprueba qué has conseguido y qué puedes ajustar mañana.</p></article>
    </div>
  `
})
export class TipsComponent {}
