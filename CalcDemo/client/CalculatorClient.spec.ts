import {CalculatorClient} from "./CalculatorClient";
import {CalculationsService} from "../service/CalculationsService";

describe('Test calculator client component', () => {
    const calculationsService = new CalculationsService()

    it('should add', () => {
        const client = new CalculatorClient(calculationsService);
        const serviceSpy = jest.spyOn(calculationsService, 'add');
        const result = client.add(1, 2);
        expect(serviceSpy).toHaveBeenCalled();
        expect(result).toBe(3);
    })

    it('should multiply', () => {
        const client = new CalculatorClient(calculationsService);
        const serviceSpy = jest.spyOn(calculationsService, 'mul');
        const result = client.mul(3, 2);
        expect(serviceSpy).toHaveBeenCalled();
        expect(result).toBe(6);
    })
})
