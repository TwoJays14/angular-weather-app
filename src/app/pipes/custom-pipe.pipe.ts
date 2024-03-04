import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: true,
  pure: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: string): string {
    const parts = value.split(' ');
    if (parts.length === 2) {
      return `${parts[0]} <span class="ampm">${parts[1]}</span>`;
    }
    return value;
  }
}
