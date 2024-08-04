import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cvv-main-intro',
  standalone: true,
  imports: [],
  templateUrl: './main-intro.component.html',
  styleUrl: './main-intro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainIntroComponent { }
