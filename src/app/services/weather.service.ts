import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CurrentWeather } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getCurrentWeather(location: string): Observable<CurrentWeather> {
    return this.http.get<CurrentWeather>(
      this.baseUrl + `current.json?key=${this.apiKey}&q=${location}`
    );


    
  }
}
