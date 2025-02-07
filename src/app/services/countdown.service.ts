import { Injectable } from '@angular/core';
import { TimeElapsed, YearsMonthsDaysElapsed } from '../interfaces/countdown.interface';
import { differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class CountdownService {
  constructor() { }

  // Método para calcular la diferencia en años, meses, días, horas, minutos y segundos
  getTimeElapsed(eventDate: Date): TimeElapsed {
    const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { years, months, days, hours, minutes, seconds };
  }

  // Método para calcular la diferencia en años, meses y días
  getYearsMonthsDaysElapsed(eventDate: Date): YearsMonthsDaysElapsed {
    const now = new Date();
    const diff = now.getTime() - eventDate.getTime();

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30)) % 12;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;

    return { years, months, days };
  }

  // Método para calcular solo los días transcurridos
  getDaysElapsed(eventDate: Date): number {
    const now = new Date();
    const diff = now.getTime() - eventDate.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
  }
}
