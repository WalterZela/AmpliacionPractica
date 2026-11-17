import { TestBed } from '@angular/core/testing';
import { PageHeaderComponent } from './page-header.component';

describe('PageHeaderComponent', () => {
  it('muestra el título y el subtítulo', () => {
    const fixture = TestBed.createComponent(PageHeaderComponent);
    fixture.componentInstance.title = 'Mis hábitos';
    fixture.componentInstance.subtitle = 'Mi lista';
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Mis hábitos');
    expect(fixture.nativeElement.textContent).toContain('Mi lista');
  });
});
