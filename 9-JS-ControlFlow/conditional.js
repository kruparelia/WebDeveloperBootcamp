var age;

if (age <=0){
    console.log("Error!");
}
if (age === 21){
    console.log("Happy 21st birthday!");
}

//even number has no remainder if divided by 2
//odd number will

if(!(age % 2 ===0)){
    console.log("Your age is odd");
}

//take the mod 1 of the square root.
//if square root is a whole number, it will have mod 0, and its a perfect square
//a decial does not have mod 0
if(age > 0 && Math.sqrt(age) % 1 ==0){
    console.log("PERFECT SQUARE");
}

