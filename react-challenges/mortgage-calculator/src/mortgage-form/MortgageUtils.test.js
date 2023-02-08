import {calculateMonthlyMortgagePayment} from './MortgageUtils';

describe('', () => {
    it('should calculate mortgage payment', function () {
        const loanAmount = 500000;
        const interestRate = 3;
        const loanYear = 30;

        const actualResult = calculateMonthlyMortgagePayment(loanAmount, interestRate, loanYear);
        const expectedResult = "2108.02";

        expect(actualResult).toEqual(expectedResult);
    });
})