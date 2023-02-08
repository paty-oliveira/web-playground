export function calculateMonthlyMortgagePayment(loanAmount, interestRate, loanYears) {
    const lengthOfLoan = getNumberOfLoanMonths(loanYears)
    const monthlyInterestRate = getMonthlyInterestRate(interestRate);

    const exponentialOperator = ((monthlyInterestRate + 1) ** lengthOfLoan);
    const firstDividend = monthlyInterestRate * exponentialOperator;
    const secondDividend = exponentialOperator - 1;
    const division = firstDividend / secondDividend;
    const quotas = (loanAmount * division).toFixed(2);

    return quotas.toString()
}

function getNumberOfLoanMonths(loanYears) {
    return loanYears * 12;
}

function getMonthlyInterestRate(interestRate) {
    const calculatedInterest = interestRate / 100;
    return calculatedInterest / 12;
}
