import {CalculationsServiceInterface} from "../service/CalculationsService";

export class CalculatorClient {
    constructor(private calculationsService:CalculationsServiceInterface) {}

    add(number: number, number2: number) {
        return this.calculationsService.add(number, number2);
    }

    mul(number: number, number2: number) {
        let result = 0;
        for (let i = 0; i < number2; i++) {
            result = this.calculationsService.add(result, number);
        }
        return result;
    }
    // mul(number: number, number2: number) {
    //     return this.calculationsService.mul(number, number2);
    // }
}
