import './MortagageForm.css';
export function MortgageForm() {
    return (
        <form className="mortgage-form">
            <div className="form-group">
                <label form="loanAmount">Principal Loan Amount</label>
                <input type="number" className="form-control" id="loanAmount"  placeholder="Dollars" required/>
            </div>
            <div className="form-group">
                <label form="interestRate">Interest Rate</label>
                <input type="number" className="form-control" id="interestRate" placeholder="Percentage" required/>
            </div>
            <div className="form-group">
                <label form="loanYears">Length of Loan</label>
                <input type="number" className="form-control" id="loanYears" placeholder="Years" required/>
            </div>
            <button type="submit" className="btn btn-primary">Calculate</button>
        </form>

    )
}
