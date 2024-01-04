import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let loggerServiceSpy: jasmine.SpyObj<LoggerService>;
  let calculator: CalculatorService;

  beforeEach(() => {
    const mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {
          provide: LoggerService,
          useValue: mockLoggerService,
        },
      ],
    });
    calculator = TestBed.inject(CalculatorService);
    loggerServiceSpy = TestBed.inject(
      LoggerService
    ) as jasmine.SpyObj<LoggerService>;
  });

  it('should add two numbers', () => {
    let result = calculator.add(1, 2);
    expect(result).toBe(3);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    let result = calculator.subtract(2, 1);
    expect(result).toBe(1);
    expect(loggerServiceSpy.log).toHaveBeenCalledTimes(1);
  });
});
