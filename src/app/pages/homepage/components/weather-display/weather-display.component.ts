import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Weather } from '../../../../models/weather.model';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [MatIconModule, HttpClientModule],
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
