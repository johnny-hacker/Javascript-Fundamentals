//Create your function below this line.
//The first parameter should be the weight and the second should be the height.

function BMIcalculator(weight_kg, height_m) {
    var BMI = weight_kg/(Math.pow(height_m, 2));

    return Math.round(BMI);
}


//If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

var bmi = BMIcalculator(65, 1.8);

//bmi should equal 20 when it's rounded to the nearest whole number.

console.log(bmi);


