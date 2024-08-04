import { ChangeDetectionStrategy, Component, HostListener } from '@angular/core';
import { NgStyle } from '@angular/common';
import { MainIntroComponent } from './components/main-intro/main-intro.component';
import { AboutComponent } from './components/about/about.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';

@Component({
  selector: 'cvv-resume-page',
  standalone: true,
  imports: [NgStyle, MainIntroComponent, AboutComponent, ExperiencesComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResumePageComponent {
  @HostListener('mousemove', ['$event'])
  mouseMove($event: MouseEvent) {
    this.cursorPosition.x = $event.clientX;
    this.cursorPosition.y = $event.clientY;
  }

  protected readonly cursorPosition = {
    x: 0,
    y: 0,
  };
}
