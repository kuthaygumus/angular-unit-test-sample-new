import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  it('should add two numbers', () => {
    service = new CalculatorService();
    expect(service.add(1, 2)).toBe(3);
  });

  it('should subtract two numbers', () => {
    service = new CalculatorService();
    expect(service.subtract(2, 1)).toBe(1);
  });
});
