import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Weather } from '../../../../models/weather.model';
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss',
})
export class WeatherDisplayComponent {
  weatherLocationDetails: Weather = {
    location: 'New York',
    icon: 'sunny',
    temperature: 20,
  };
}
