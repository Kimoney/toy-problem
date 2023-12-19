// Challenge 2: Speed Detector (Toy Problem)

// Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// declare the function using the function keyword where we will place our block of code

function speedChecker(speed){

// We declare a variable named carSpeed to collect the speed data

    let carSpeed = parseInt
    ( prompt("What is the driving speed?"));

// We declare a variable named demeritPoints to hold the drivers' demerit points

    let demeritPoints;
// We declare a variable named extraSpeed to hold the value of the exceeded speed
// We pass the data through various conditions to make sure the speed entered is a number and it is a positive integer

    let extraSpeed;
        if (carSpeed>70){
            extraSpeed=carSpeed-70;
        } else if (carSpeed<0 || typeof carSpeed !== '') {
            alert('The entered number is not valid. Please enter a positive integer');
        } 
        else {
            extraSpeed=0;
        }


// To find the demeritPoints, we have to first define get the extra speed above the speed limit which is accessible from the variable extraSpeed.
// Since the points are capped in intervals of fives, we need a method that will round up the result of the extraSpeed divided by five, to accurately allocate points. 
    demeritPoints = Math.ceil(extraSpeed/5);

// In this conditional loop, if the condition is a truthy, the user gets an alert with their points.
// If it is a falsy and no points can be awarded, the condition either returns a license suspended or ok alert.

    if (demeritPoints > 0 && demeritPoints <= 12){
        alert(`You have ${demeritPoints} points`)
    } else if (demeritPoints > 12){
        alert("License suspended")
    } else if (demeritPoints <= 0 ){
        alert("Ok")
    } 
    else (
        alert("Enter Speed As A Valid Integer")
    )    

} 
// We invoke the function so that it can prompt the user once the page is loaded

speedChecker()