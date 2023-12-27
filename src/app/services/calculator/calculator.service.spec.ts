import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  it('should add two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    service = new CalculatorService(loggerService);
    let result = service.add(1, 2);
    expect(result).toBe(3);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let loggerService = new LoggerService();
    spyOn(loggerService, 'log');
    service = new CalculatorService(loggerService);
    let result = service.subtract(2, 1);
    expect(result).toBe(1);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });
});
