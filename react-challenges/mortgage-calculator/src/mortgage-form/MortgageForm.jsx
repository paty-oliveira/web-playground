import './MortagageForm.css';
import {useState} from "react";
import {calculateMonthlyMortgagePayment} from "./MortgageUtils";

export function MortgageForm() {

    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanYears, setLoanYears] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [monthlyPayment, setMonthlyPayment] = useState("");

    const handleChangeLoanYears = (event) => {
        setLoanYears(event.target.value);
    }

    const handleChangeInterestRate = (event) => {
        setInterestRate(event.target.value);
    }

    const handleChangeLoanAmount = (event) => {
        setLoanAmount(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setIsSubmitted(!isSubmitted);
        setMonthlyPayment(calculateMonthlyMortgagePayment(loanAmount, interestRate, loanYears));
    }

    return (
        <form className="mortgage-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label form="loanAmount">Principal Loan Amount</label>
                <input
                    type="number"
                    className="form-control"
                    id="loanAmount"
                    placeholder="Dollars"
                    required
                    onChange={handleChangeLoanAmount}
                />
            </div>
            <div className="form-group">
                <label form="interestRate">Interest Rate</label>
                <input
                    type="number"
                    className="form-control"
                    id="interestRate"
                    placeholder="Percentage"
                    required
                    onChange={handleChangeInterestRate}
                />
            </div>
            <div className="form-group">
                <label form="loanYears">Length of Loan</label>
                <input
                    type="number"
                    className="form-control"
                    id="loanYears"
                    placeholder="Years"
                    required
                    onChange={handleChangeLoanYears}
                />
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
            { isSubmitted && <p>Your monthly mortgage payment will be <strong>${monthlyPayment}.</strong></p> }
        </form>
    )
}
