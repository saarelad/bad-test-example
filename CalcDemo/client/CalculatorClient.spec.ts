import {CalculatorClient} from "./CalculatorClient";
import {CalculationsServiceInterface} from "../service/CalculationsService";

const calculationsServiceMock: CalculationsServiceInterface = {
    add: (a,b) => a+b,
    mul: jest.fn().mockReturnValue(6),
};

describe('Test calculator client component', () => {

    it('should add', () => {
        const client = new CalculatorClient(calculationsServiceMock);
        const addSpy = jest.spyOn(calculationsServiceMock, 'add');
        const result = client.add(1, 2);
        expect(addSpy).toHaveBeenCalled();
        expect(result).toBe(3);
    })

    it('should multiply', () => {
        const client = new CalculatorClient(calculationsServiceMock);
        const multiplySpy = jest.spyOn(calculationsServiceMock, 'mul');
        const result = client.mul(3, 2);
        // expect(multiplySpy).toHaveBeenCalled();
        expect(result).toBe(6);
    })
})
