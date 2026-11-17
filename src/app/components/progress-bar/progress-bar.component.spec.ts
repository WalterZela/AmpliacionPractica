import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProgressBarComponent } from './progress-bar.component';

describe('ProgressBarComponent', () => {
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [ProgressBarComponent] }).compileComponents();
    fixture = TestBed.createComponent(ProgressBarComponent);
  });

  it('should create the component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should limit the displayed progress to 100', () => {
    fixture.componentInstance.value = 120;
    fixture.detectChanges();
    expect(fixture.componentInstance.safeValue).toBe(100);
  });
});
