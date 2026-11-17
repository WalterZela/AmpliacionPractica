import { Component } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';

@Component({
  standalone: true,
  imports: [PageHeaderComponent],
  template: `
    <app-page-header title="Sobre HabitTrack" subtitle="Un proyecto académico para practicar Angular y el desarrollo por componentes." />
    <section class="about-panel">
      <div class="about-mark">H</div>
      <div>
        <p class="eyebrow">EL PROYECTO</p>
        <h2>Organiza tu rutina con sencillez.</h2>
        <p>HabitTrack permite crear hábitos, organizarlos por categoría, marcar su realización y consultar un resumen del progreso diario.</p>
        <p>La aplicación está desarrollada con Angular. Se utilizan componentes reutilizables, navegación mediante Angular Router, un servicio para gestionar los datos y almacenamiento local del navegador.</p>
      </div>
    </section>
    <section class="section-block">
      <div class="section-title"><div><p class="eyebrow">TECNOLOGÍAS</p><h2>Qué se practica</h2></div></div>
      <div class="tech-list">
        <div><strong>Angular Components</strong><span>Separación de la interfaz en piezas reutilizables.</span></div>
        <div><strong>Inputs y Outputs</strong><span>Comunicación entre componentes presentacionales y páginas.</span></div>
        <div><strong>Angular Router</strong><span>Navegación entre las cinco páginas.</span></div>
        <div><strong>Servicio y modelo</strong><span>Gestión y representación de los hábitos.</span></div>
        <div><strong>Pruebas</strong><span>Pruebas unitarias básicas de componentes.</span></div>
      </div>
    </section>
  `
})
export class AboutComponent {}
