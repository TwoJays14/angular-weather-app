import { Component, DoCheck, Input } from '@angular/core';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather.model';
import { Observable, catchError, of } from 'rxjs';
import { ModalComponent } from './components/modal/modal.component';
import { UiService } from '../../services/ui.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    WeatherDisplayComponent,
    SearchBarComponent,
    ModalComponent,
    AsyncPipe,
    NgIf,
  ],
  providers: [WeatherService],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  searchVal: string = '';

  weatherDetails$!: Observable<WeatherData | null>;

  showModal: Observable<boolean> = this.uiService.modalValue$.pipe(
    (show) => (this.showModal = show)
  );

  constructor(
    private weatherService: WeatherService,
    private uiService: UiService
  ) {}

  searchDest(value: string): void {
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
