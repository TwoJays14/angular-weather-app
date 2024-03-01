import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherService } from '../../services/weather.service';
import { CurrentWeather } from '../../models/weather.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [WeatherDisplayComponent, SearchBarComponent],
  providers: [WeatherService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent implements DoCheck {
  searchVal: string = '';

  weatherDetails$!: Observable<CurrentWeather>;

  constructor(private weatherService: WeatherService) {}

  ngDoCheck(): void {
      console.log('wather details:',this.weatherDetails$);
  }

  searchDest(value: string) {
    console.log('homepage component:', value);
    this.searchVal = value;

    this.weatherService.getCurrentWeather(value).pipe((data) => {
      return (this.weatherDetails$ = data);
    });
  }
}
