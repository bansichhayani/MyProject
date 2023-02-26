
// Loan Calculator

function calculateLoan(){
    let LoanAmount = document.getElementById('lamount').value;
    let InteretRate = document.getElementById('irate').value;
    let time = document.getElementById('mpay').value;

    let interest = (LoanAmount * InteretRate * time)/100;
    console.log(interest);
    let total = parseInt(LoanAmount) + parseInt(interest);
    console.log(total);
}