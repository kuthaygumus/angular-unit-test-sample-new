import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  add(a: number, b: number) {
    this.loggerService.log(`Adding ${a} and ${b}`);
    return a + b;
  }

  subtract(a: number, b: number) {
    this.loggerService.log(`Subtracting ${a} and ${b}`);
    return a - b;
  }
}
