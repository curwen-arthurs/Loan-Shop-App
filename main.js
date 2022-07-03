// Creates data rows for the HTML table

// let originalValue = document.querySelector(".value").value;
document.querySelector(".btn-link").addEventListener("click", displayTable);

function displayTable(){
    let loanAmount = document.querySelector(".amount").value;
    let term = document.querySelector(".term").value * 12;
    let interestRate = document.querySelector(".rate").value / 100;
    let monthlyInterestRate = interestRate / 12;

    let paymentAmount = (loanAmount * monthlyInterestRate) / (1 - Math.pow((1 + monthlyInterestRate), (-1 * term)));

    let principal = 0;
    let monthlyInterest = 0;
    let totalInterest = 0;
    let balance = loanAmount;

    let placeholder = document.querySelector(".data-output");
    let out = "";

    for (i = 0; i < term; i++) {
        if (i == 0) {
            principal = paymentAmount - (loanAmount * monthlyInterestRate);
            monthlyInterest = loanAmount * monthlyInterestRate;
            totalInterest += monthlyInterest;
            balance = balance - principal; 

            out += `
            <tr>
                <td>${i + 1}</td>
                <td>${paymentAmount.toFixed(2)}</td>
                <td>${principal.toFixed(2)}</td>
                <td>${monthlyInterest.toFixed(2)}</td>
                <td>${totalInterest.toFixed(2)}</td>
                <td>${balance.toFixed(2)}</td>
            </tr>
            `;
        }
        else {
            principal = paymentAmount - (balance * monthlyInterestRate);
            monthlyInterest = balance * monthlyInterestRate;
            totalInterest += monthlyInterest;
            balance = balance - principal; 

            if (i == term - 1) {
                balance = Math.abs(balance);
            }

            out += `
            <tr>
            <td>${i + 1}</td>
            <td>${paymentAmount.toFixed(2)}</td>
            <td>${principal.toFixed(2)}</td>
            <td>${monthlyInterest.toFixed(2)}</td>
            <td>${totalInterest.toFixed(2)}</td>
            <td>${balance.toFixed(2)}</td>
            </tr>
            `;
        }   
    }    
        placeholder.innerHTML = out;
}

