// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// We begin the program by prompting the user to give two data inputs.

let salary = parseInt(prompt("Enter Base Salary Only"))
let benefits = parseInt(prompt("Enter Benefits Only"))

// NSSF is Exempted from tax and has a consistent deduction, which we will declare with the const variable
const nssfTierOne = 360;
const nssfTierTwo = 720;

// The total NSSF Exempted from taxation 
const nssfExemption = nssfTierOne + nssfTierTwo

// Gross salary comprises of the base salary and other benefits from the employer. We can get the value using basic operations
const grossSalary = salary + benefits;
console.log(`Your gross salary is KES${grossSalary}`)

// The total taxable ammount comprises of the Gross salary less the exemptions, which is NSSF

const taxableAmmount = grossSalary - nssfExemption;
console.log(`The amount you are taxed on is KES ${taxableAmmount}`);

// PAYE CALCULATOR
// PAYE is calculated in bands with the least taxable salary being 24,000
// We will use a function that we will pass taxable ammount to calculate the PAYE

const payeCalculator = function (){
    let payeAmmount;
    if (taxableAmmount > 24000 && taxableAmmount < 32333) {
        return payeAmmount = (24000 * 0.1);
    } else if (taxableAmmount > 32333 && taxableAmmount < 500000) {
        return payeAmmount = (24000 * 0.1) + (8333 * 0.25) + ((taxableAmmount - 32333) * 0.25);
    } else if (taxableAmmount > 500000 && taxableAmmount < 800000) {
        return payeAmmount = ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + ((taxableAmmount - 500000)*0.3));
    }else if (taxableAmmount > 800000){
        return payeAmmount = ((24000 * 0.1) + (8333 * 0.25) + (467667 * 0.3) + (300000 * 0.325) + ((taxableAmmount- 800000) * 0.325))
    }else if (taxableAmmount < 24000) {
        console.log("Minimum Taxable Income: KES 24,001.00 per month");
        return payeAmmount === 0;
    }
}
payeCalculator()

// NHIF RATES are based on gross salary
// We will create another function that takes the gross salary as an argument and returns the NHIF contribution  

const nhifCalc = function (){
    let rate;
    if (grossSalary > 0 && grossSalary < 5999){
        rate = 150;
    } else if (grossSalary > 5999 && grossSalary < 7999){
        rate = 300;
    } else if (grossSalary > 7999 && grossSalary < 11999){
        rate = 400;
    } else if (grossSalary >11999 && grossSalary < 14999){
        rate = 500;
    } else if (grossSalary > 14999 && grossSalary < 19999){
        rate = 600;
    } else if (grossSalary > 19999 && grossSalary < 24999){
        rate = 750;
    } else if (grossSalary > 24999 && grossSalary < 29999){
        rate = 850;
    } else if (grossSalary > 29999 && grossSalary < 34999){
        rate = 900;
    } else if (grossSalary > 34999 && grossSalary < 39999){
        rate = 950;
    } else if (grossSalary > 39999 && grossSalary < 44999){
        rate = 1000;
    } else if (grossSalary > 44999 && grossSalary < 49999){
        rate = 1100;
    } else if (grossSalary > 49999 && grossSalary < 59999){
        rate = 1200;
    } else if (grossSalary > 59999 && grossSalary < 69999){
        rate = 1300;
    } else if (grossSalary > 69999 && grossSalary < 79999){
        rate = 1400;
    } else if (grossSalary > 79999 && grossSalary < 8999){
        rate = 1500;
    } else if (grossSalary > 89999 && grossSalary < 99999){
        rate = 1600;
    } else if (grossSalary > 99999){
        rate = 1700;
    }
     return  rate;
}

nhifCalc()

// We now have NHIF deduction. We also have the PAYE and Gross Salary Calculator.
// Now we can calculate Net Salary by subtracting these ammounts from Gross Salary.

const netPay = grossSalary - (payeCalculator() + nhifCalc());

// To give the user the program's result, we will use an alert to print the output.

alert(`Your gross salary is KES${grossSalary}, and your net pay is KES ${netPay}. Thanks.`)