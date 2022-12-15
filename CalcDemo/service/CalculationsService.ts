export interface CalculationsServiceInterface {
    add(number: number, number2: number): number;

    mul(number: number, number2: number): number;
}

export class CalculationsService implements CalculationsServiceInterface {

    add(number: number, number2: number) {
        return number + number2;
    }

    mul(number: number, number2: number) {
        return number * number2;
    }
}
