import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  it('should add two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(mockLoggerService);
    let result = service.add(1, 2);
    expect(result).toBe(3);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    service = new CalculatorService(mockLoggerService);
    let result = service.subtract(2, 1);
    expect(result).toBe(1);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});
