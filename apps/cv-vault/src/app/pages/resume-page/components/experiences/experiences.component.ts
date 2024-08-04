import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ExperienceCardComponent } from '@shared/components/experience-card/experience-card.component';
import { experienceData } from '../../resume-data';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'cvv-experiences',
  standalone: true,
  imports: [NgForOf, ExperienceCardComponent],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencesComponent {
  public readonly experiences = experienceData;
}
