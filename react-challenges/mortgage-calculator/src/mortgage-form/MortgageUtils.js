export function calculateMonthlyMortgagePayment(loanAmount, interestRate, loanYears) {
    const numberMonths = loanYears * 12;
    const monthlyInterestRate = interestRate / 12;
    const exponents = Math.pow((1 + monthlyInterestRate), numberMonths);
    const firstPart = monthlyInterestRate * exponents;
    const secondPart = exponents - 1;
    const equation = firstPart / secondPart

    return (loanAmount * equation).toString();
}
