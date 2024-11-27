import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  formatDate(date: string) {
    const date_filter = new Date(date);
    const day = String(date_filter.getDate()).padStart(2, '0');
    const month = String(date_filter.getMonth() + 1).padStart(2, '0');
    const year = date_filter.getFullYear();
    return `${year}-${month}-${day}`;
  }

  convertTo12HourFormat(hour24: string): string {
    let [hours, minutes] = hour24.split(':').map(Number);
    const isAM = hours < 12;
    let period = isAM ? 'AM' : 'PM';
    hours = hours % 12;
    if (hours === 0) hours = 12;
    let formattedTime = `${hours}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${period}`;
    return formattedTime;
  }
}
