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

// let result = '';
// for (let i = 1; i <= 100; i++) {
//   result += i;
//   if(i%10 === 0){
//     result += '\n'
//   } else{
//     result += ','
//   }
// }
// console.log(result)

// Print 1 to 100, but with a specific condition. If a number is divisible by both 3 and 5, it logs "fizzbuzz" to the console instead of the number itself

// for(let i = 1; i<=100; i++){
//   if(i % 3 === 0){
//     console.log('fizz');
//   } else if( i% 5 === 0){
//     console.log('buzz');
//   }else{
//     console.log(i);
//   }
// }

// print 2's table
// for(let i = 1; i<=10; i++ ){
//   console.log(`2 * ${i} = ${2 * i}`);
// }

// Run a loop from 1 to 50
// From 1 to 10 print "A"
// From 11 to 20 print "B"
// From 21 to 30 print "C"
// From 31 to 40 print "D"
// From 41 to 50 print "E"

// for (let i = 1; i <= 50; i++) {
//   if (i / 10 === 1) {
//     console.log("A");
//   } else if (i / 20 === 1) {
//     console.log("B");
//   } else if (i / 30 === 1) {
//     console.log("C");
//   } else if (i / 40 === 1) {
//     console.log("D");
//   } else if (i / 50 === 1) {
//     console.log("E");
//   }
// }

// for (let i = 50; i >= 1; i--) {
//     if (i / 10 === 1) {
//       console.log("E");
//     } else if (i / 20 === 1) {
//       console.log("D");
//     } else if (i / 30 === 1) {
//       console.log("C");
//     } else if (i / 40 === 1) {
//       console.log("B");
//     } else if (i / 50 === 1) {
//       console.log("A");
//     }
//   }

// Print below series:
// 5 25 125.. till number is less than equal to 10000

// for(let i = 1; i<= 5; i++){
//   console.log(5** i);
// }

// 3,6,9,12... till number is less than equal to 500
// for (let i = 1; i<=500; i++){

//   if(i % 3 === 0){
//     console.log(i);
//   }
// }

/* print 
120
221
322
423
524
625
726
827
928
1029
*/

// for (let i = 0; i<=9; i++)
// {
//   console.log(`${i + 1}2${i}`);
// }

// Print below series:
// 100 95 90 85 80 ... till 0

// for(let i = 100; i>= 0; i-- ){
//   if(i% 5 === 0){
//     console.log(i);
//   }
// }

// Number 70 is divisible by which numbers till 70? Find out and print those numbers.
// for(let i =0; i<= 70; i++){
//   if(70 % i === 0){
//     console.log(i)
//   }
// }

// Write a while loop that logs the numbers 1 to 10 in the console.
// let i = 1;
// while( i <=10){
//   console.log(i);
//   i++
// }

// Calculate sum of all numbers from 1 to 10.
// let i = 1;
// let sum = 0;
// while(i<=10){
//   sum += i;
//   i++
// }
// console.log(sum)

// Counting down from 10 to 1.
// let i = 10;
// while(i >= 1){
//   console.log(i);
//   i--;
// }

// Print 2's table. in while loop

// let i=1;
// while(i<=10){
//   console.log(`2 * ${i} = ${2 * i}`);
//   i++;
// }

// Calculate sum of all odd numbers from 1 to 100.using whilw loop

// let i = 0;
// let oddSum = 0;
// while (i <= 100) {
//   if (i % 2 === 1) {
//     oddSum += i;
//   }
//   i++;
// }
// console.log(oddSum);

// write a do..while loop that logs the number 1 to 5 the console
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 5);


// Counting down from 10 to 1. using do..while loop

let i=10;
do{
    console.log(i);
    i--
}while(i>=1);