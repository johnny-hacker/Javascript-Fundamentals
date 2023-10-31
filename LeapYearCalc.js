function isLeap(year) {

    /**************Don't change the code above****************/

    //Write your code here.
    console.log(year % 4);
    console.log(year % 400);
    if (year % 4 == 0) {

        if (year % 100 == 0) {
            if (year % 400 == 0){
                console.log("leap year");
            }
        } else {
            console.log("leap year");
        }
    } else {
        console.log("not a leap year");
    }

    /**************Don't change the code below****************/

}

isLeap(2016);