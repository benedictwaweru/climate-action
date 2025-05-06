import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-nglib',
  imports: [CommonModule],
  templateUrl: './nglib.component.html',
  styleUrl: './nglib.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NglibComponent {}
