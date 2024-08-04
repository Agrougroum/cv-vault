import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Experience } from '@shared/models/experience.interface';
import { TagComponent } from '../tag/tag.component';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'cvv-experience-card',
  standalone: true,
  imports: [NgForOf, TagComponent],
  templateUrl: './experience-card.component.html',
  styleUrl: './experience-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceCardComponent {
  @Input({ required: true }) experience!: Experience;
}
