
// Loan Calculator

function calculateLoan(){
    let LoanAmount = document.getElementById('lamount').value;
    let InteretRate = document.getElementById('irate').value;
    let time = document.getElementById('tpay').value;

    let interest = (LoanAmount * InteretRate * time)/100;
    
    let total = parseInt(LoanAmount) + parseInt(interest);
    
    document.getElementById('mpay').value = total;
}

//BMI calculator

function calculateBMI(){
    let Height = document.getElementById('height').value;
    let Weight = document.getElementById('weight').value;

    let Feet = Height * 0.3048;
   
    let BMI = Weight / (Feet * Feet);
    
    document.getElementById('bmi').value = BMI;
}

//Weight Converter

function calculateWeight(){
    let Pound = document.getElementById('pound').value;

    let Kg = Pound / 2.2046;
    
    document.getElementById('msg').innerText = "Your weight in Kilograms is  " +Kg;
}

//Digital Calculator

function Zero(){
   
}

// Promises

let p = new Promise(function(resolve, reject){

    let sum = 4 + 5;

    if(sum > 0)
        resolve(sum);
    else if(sum < 0)
        reject("Sum is not valid");
});

p.then(function(s){
    console.log("Promise is sucessful....");
    console.log(s);
})

p.catch(function(s){
    console.log("Promise is unsucessful...")
})
