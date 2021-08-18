let num = 201;   //inputdan qabul qilsa ham bo'ladi.

let reversed = reverseNum(num);

function reverseNum(n) {
    n = n + ""
    return n.split("").reverse().join("");
}

if(num == reversed){
    console.log(` ${num} palindrom son `);
}else{
    console.log(` Palindrom son emas `);
}
