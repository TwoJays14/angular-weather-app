import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      this.baseUrl + `current.json?key=${this.apiKey}&q=${location}`
    );
  }
}
