// let marks = 60;

// if(marks > 60){
//     console.log('You are pass');
// } else{
//     console.log('You are fail')
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(2**1);
//     console.log(2**2);
//     console.log(2**3-2);
//     console.log(2**3);
//     console.log(2**4-6);
//     console.log(2**4-4);
//     console.log(2**4-2);
//     console.log(2**4);
//     console.log(2**4+2);
//     console.log(2**4+4);
// }

// take tow number and add a value that is the sum of te two numbers plus another number. Now find the 3r number. Write the logic

// let a = 5;
// let b=6;
// sum = a +b + 7;
// console.log(sum);
// console.log(sum - (a+b));

// for(let i=1; i<=100; i++){
//     if(i%5 == 0 && i%15 == 0){
//         console.log(i);
//     }
// }

// calculat sum of all numbers

// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i = 0; i < 12; i++) {
//   console.log(2 ** i);
// }

let result = '';
for (let i = 1; i <= 100; i++) {
  result += i;
  if(i%10 === 0){
    result += '\n'
  } else{
    result += ','
  }
}
console.log(result)
