import { Component, DoCheck, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AsyncPipe, DatePipe, JsonPipe, NgIf } from '@angular/common';
import { WeatherData } from '../../../../models/weather.model';
@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [MatIconModule, HttpClientModule, AsyncPipe, JsonPipe, NgIf, DatePipe],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.scss',
})
export class WeatherDisplayComponent {
  @Input() weatherLocationDetails$!: Observable<WeatherData | null>;



}
