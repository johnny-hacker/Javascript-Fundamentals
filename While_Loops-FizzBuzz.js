/*
Programmer: Olmedo, Johnny
Date: 10/31/2023
This program is the solution to the famous fizz buzz interview question
 */

var output = [];

var count = 1;

function fizzBuzz() {
    while (count < 100) {
        // if count is divisible by 3 and count is divisible by 5
        if (count % 3 == 0 && count % 5 == 0) {
            // add fizzbuzz
            output.push("FizzBuzz");
        }

        // if count is divisible by 3
        if (count % 3 == 0) {
            // add fizz
            output.push("Fizz");
        }
        // if count is divisible by 5
        else if (count % 5 == 0) {
            // add buzz
            output.push("Buzz");
        }
        // else just add the number
        else {
            //write code here
            output.push(count)

        }
        count++; // add 1 to count
        console.log(output);
    }
}

fizzBuzz();
