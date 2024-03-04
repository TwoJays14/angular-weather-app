import { Component, DoCheck, Input, Pipe, PipeTransform } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, NgIf } from '@angular/common';
import { WeatherData } from '../../../../models/weather.model';
// import { CustomPipe } from '../../../../pipes/custom-pipe.pipe';

// @Pipe({
//   name: 'customPipe',
//   pure: true, // Ensure the pipe is stateless
// })
// export class CustomPipe implements PipeTransform {
//   transform(value: string): string {
//     const parts = value.split(' ');
//     if (parts.length === 2) {
//       return `${parts[0]} <span class="ampm">${parts[1]}</span>`;
//     }
//     return value;
//   }
// }
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [
    MatIconModule,
    HttpClientModule,
    AsyncPipe,
    JsonPipe,
    NgIf,
    DatePipe,
  ],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss',
})
export class WeatherDisplayComponent {
  @Input() weatherLocationDetails$!: Observable<WeatherData | null>;

  constructor() {}

  
}
