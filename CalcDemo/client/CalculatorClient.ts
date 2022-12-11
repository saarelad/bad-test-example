import {CalculationsService} from "../service/CalculationsService";

export class CalculatorClient {
    constructor(private calculationsService:CalculationsService) {}

    add(number: number, number2: number) {
        return this.calculationsService.add(number, number2);
    }

    mul(number: number, number2: number) {
        return this.calculationsService.mul(number, number2);
    }
}
