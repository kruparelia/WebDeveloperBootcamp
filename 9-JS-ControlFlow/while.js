//number 1
count = -10;
while(count < 20){
    console.log(count);
    count++;
}

// for loop
for(i = -10; i <= 19; i++){
    console.log(i);
}

//number2: even numbers 10-40
count2 = 10;
while(count2 < 41){
    console.log(count2);
    count2 += 2;
}

for(i = 10; i <= 40; i++){
    if(i % 2 ===0){
        console.log(i);
    }
}
//number3: odd num 300-333

odd = 300;
while ( odd < 333){
    if(odd % 2 != 0){
        console.log(odd);
    }
    odd++;
}

for(i = 300; i <= 333; i++){
     if(odd % 2 != 0){
        console.log(odd);
    }
}

//number 4: print all num divisible by 5 and 3, 5-50

num = 5;
while (num <= 50){
    if(num % 3 === 0){
        if (num % 5 === 0){
            console.log(num);
        }
    }
    num++;
}

for(i = 5; i < 50 ; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log(i);
    }

}
