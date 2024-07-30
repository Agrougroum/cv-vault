import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainIntroComponent } from './components/main-intro/main-intro.component';
import { AboutComponent } from './components/about/about.component';

@Component({
  selector: 'cvv-resume-page',
  standalone: true,
  imports: [CommonModule, MainIntroComponent, AboutComponent],
  templateUrl: './resume-page.component.html',
  styleUrl: './resume-page.component.scss',
})
export class ResumePageComponent { }
