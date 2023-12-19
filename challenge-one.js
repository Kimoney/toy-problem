// Challenge 1: Student Grade Generator (Toy Problem)

// Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

// A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.


// We define the function using the function keyword where we will place our block of code.

function studentGradeGenerator(){

// We create a variable to take the data that the user inputs

let studentMarks = parseInt(prompt('How many marks did you score?'));

// From the user input, our function will pass the data through various conditions and if true, a specific grade will be returned.

if (studentMarks >= 0 && studentMarks <= 100){
    let grade;
    if(studentMarks >= 80) {
       grade = "A";
    } else if (studentMarks >= 60){
        grade = "B";
    }else if (studentMarks >= 50){
        grade = "C";
    }else if (studentMarks >= 40){
        grade = "D";
    }else {
        grade = "E";
    }
    console.log("Your grade is " + grade);
    alert(`If your marks are ${studentMarks}, your grade is ${grade}` );
}
// If the input from the user is a falsy, the function will return an alert to the user requesting a new input.

else {
    console.log ("Invalid input! Please enter a number between 0 and 100.");
    alert (`Invalid input! Please enter a number between 0 and 100.`);
}
}

// We invoke the  function to prompt the user to input their marks and in turn recieve their grades.
studentGradeGenerator()
