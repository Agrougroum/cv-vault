import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

@Component({
  standalone: true,
  imports: [ResumePageComponent, RouterModule],
  selector: 'cvv-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cv-vault';
}
