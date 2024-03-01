import { Component, DoCheck, Input } from '@angular/core';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather.model';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [WeatherDisplayComponent, SearchBarComponent],
  providers: [WeatherService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  searchVal: string = '';

  weatherDetails$!: Observable<WeatherData | null>;

  constructor(private weatherService: WeatherService) {}

  searchDest(value: string) {
    console.log('serach value', value);
    this.searchVal = value;

    this.weatherService.getCurrentWeather(value).pipe(
      catchError((error) => {
        console.log('Error:', error);
        return of(error);
      }),
      (data) => {
        return (this.weatherDetails$ = data);
      }
    );
  }
}
