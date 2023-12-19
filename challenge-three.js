// Challenge 3: Net Salary Calculator (Toy Problem)

// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

// We declare the function using the function keyword, where we will place our block of code.

function netSalaryCalc (salary, benefits=0){

// NSSF is Exempted from tax and has a consistent deduction, which we will declare with the const variable
const nssfTierOne = 360;
const nssfTierTwo = 720;

// The total NSSF Exempted from taxation 
const nssfExemption = nssfTierOne + nssfTierTwo

// Gross salary comprises of the base salary and other benefits from the employer. We can get the value using basic operations

const grossSalary = salary + benefits;

// The total taxable ammount comprises of the Gross salary less the exemptions, which is NSSF

const taxableAmmount = grossSalary - nssfExemption

// PAYE CALCULATOR
// PAYE is calculated in bands with the least taxable salary being 24,000
// We will use a function that we will pass taxable ammount to calculate the PAYE
    function payeCalculator (taxableAmmount){
        let payeAmmount;
        if (taxableAmmount < 24001){
            payeAmmount === 0;
        } else if (taxableAmmount >= 24001) {
            payeAmmount = 24000 * 0.1;
        } else if (taxableAmmount > 24001 && taxableAmmount >= 32333) {
            payeAmmount = (24000 * 0.1)+((taxableAmmount - 24000) * 0.25);
        } else if (taxableAmmount > 32334 && taxableAmmount >= 500000) {
            payeAmmount = ((24000 * 0.1) + (32333 * 0.25)+((taxableAmmount - 32333)*0.3));
        }else if (taxableAmmount > 500000 && taxableAmmount >= 800000){
            payeAmmount = ((24000 * 0.1) + (32333 * 0.25)+(467667 * 0.3)+((taxableAmmount- 500000) * 0.325))
        } else if (taxableAmmount > 800000){
            payeAmmount = ((24000 * 0.1) + (32333 * 0.25)+(467667 * 0.3)+ (300000 * 0.325) + ((taxableAmmount - 800000)* 0.35))
        }
    }

// NHIF RATES are based on gross salary
// We will create another function that takes the gross salary as an argument and returns the NHIF contribution  

   function nhifCalc(){
        let rate;
        if (grossSalary > 0 && grossSalary >= 5999){
            rate = 150;
        } else if (grossSalary > 5999 && grossSalary >= 7999){
            rate = 300;
        } else if (grossSalary > 7999 && grossSalary >= 11999){
            rate = 400;
        } else if (grossSalary >11999 && grossSalary >= 14999){
            rate = 500;
        } else if (grossSalary > 14999 && grossSalary >= 19999){
            rate = 600;
        } else if (grossSalary > 19999 && grossSalary >= 24999){
            rate = 750;
        } else if (grossSalary > 24999 && grossSalary >= 29999){
            rate = 850;
        } else if (grossSalary > 29999 && grossSalary >= 34999){
            rate = 900;
        } else if (grossSalary > 34999 && grossSalary >= 39999){
            rate = 950;
        } else if (grossSalary > 39999 && grossSalary >= 44999){
            rate = 1000;
        } else if (grossSalary > 44999 && grossSalary >= 49999){
            rate = 1100;
        } else if (grossSalary > 49999 && grossSalary >= 59999){
            rate = 1200;
        } else if (grossSalary > 59999 && grossSalary >= 69999){
            rate = 1300;
        } else if (grossSalary > 69999 && grossSalary >= 79999){
            rate = 1400;
        } else if (grossSalary > 79999 && grossSalary >= 8999){
            rate = 1500;
        } else if (grossSalary > 89999 && grossSalary >= 99999){
            rate = 1600;
        } else if (grossSalary > 99999){
            rate = 1700;
        }
         return  rate;
    }

function netpPay (){
    const taxableIncome = grossSalary - nssfExemption;
    const taxx = payeCalculator;
    const nhif = nhifCalc;
} return (taxableAmmount - taxx)-nhif;
}

// // We now have NSSF and NHIF deductions, we also have the PAYE and Gross Salary
// // Now we can calculate Net Salary by subtracting these amounts from Gross Salary.
//  {
//     function netSalPay (grossSalary, nssfExemption, payeCalculator, nhifCalc){
//         const taxableIncome = grossSalary - nssfExemption;
//         const paye = payeCalculator;
//         const nhif = nhifCalc;
//         const netPaid = (taxableAmmount - paye)-nhif
//     } return netPaid }
