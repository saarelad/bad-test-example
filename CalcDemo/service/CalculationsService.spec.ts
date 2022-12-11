import {CalculationsService} from "./CalculationsService";

describe('Test calculation service', () => {
    let calculator: CalculationsService;

    beforeEach(() => {
        calculator = new CalculationsService();
    });

    it('should add two numbers', () => {
        const result = calculator.add(1, 2);
        expect(result).toBe(3);
    });

    it('should multiply two numbers', () => {
        const result = calculator.mul(3, 2);
        expect(result).toBe(6);
    });
})
