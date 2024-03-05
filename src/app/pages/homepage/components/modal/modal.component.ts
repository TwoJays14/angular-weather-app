import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { WeatherData } from '../../../../models/weather.model';
import { AsyncPipe, NgIf } from '@angular/common';
import { UiService } from '../../../../services/ui.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatIconModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  @Input() weatherLocationDetails$!: Observable<WeatherData | null>;

  showModal: Observable<boolean> = this.uiService.modalValue$.pipe(
    (show) => (this.showModal = show)
  );

  constructor(private uiService: UiService) {}

  changeModal() {
    this.uiService.toggleModal(false);
  }
}
