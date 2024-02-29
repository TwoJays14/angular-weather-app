import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherDisplayComponent } from './components/weather-display/weather-display.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [WeatherDisplayComponent, SearchBarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  searchVal: string = '';

  searchDest(value: string) {
    console.log('homepage component:', value);
    this.searchVal = value;
  }
}
