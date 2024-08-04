import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'cvv-tag',
  standalone: true,
  imports: [],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  @Input({ required: true }) label!: string;
}
