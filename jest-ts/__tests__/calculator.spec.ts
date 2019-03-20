import {Calculator} from "../src/calculator";

describe('Calculator', () => {
    it('calculator should sum numbers from string', () => {
        const calculator = new Calculator();
        expect(calculator.sum('1,2')).toEqual(3);
    });
});