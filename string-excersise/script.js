// const str = "My name is learn javascript"; split this stirng using space and find length
// const str = "My name is learn javascript";
// // console.log(str.length)
// const words = str.split(' ');
// console.log(words.length)

// write the program to check is a tring is palindrome or not?
// let str='maam';
// let str2 = '';
// for(let i=str.length-1; i>=0; i--){
//     str2 += str[i];
// }
// if(str === str2){
//     console.log('palindrome');
// }else{
//     console.log("Not palindrom")
// }

// 9581894461 Convert to below format
/* 95818*****
*****94461
958**944** */

// let str = '9581894461';
// let str1 = str.slice(0,5).padEnd(10,'*');
// let str2 = str.slice(5,10).padStart(10,'*');
// const str3 = str.slice(0, 3) + "**" + str.slice(5, 8) + "**";
// console.log(str1);
// console.log(str2);
// console.log(str3);

// Write the program to reverce a tring.
// let str = " Nepal";
// let revercedString = '';

// for(let i=str.length-1; i>=0; i--){
//     revercedString += str[i];
// }
// console.log(revercedString);

// Capitlize first character of the string.
// let str = 'hello world';
// let capitlizeString = str.charAt(0).toUpperCase() + str.slice(1);
// console.log(capitlizeString);

// wrrite  a program to make uppercase character to to lowercase and lowercase to uppercase.

// let str='JanakPUR';
// let result= '';
// for(let i=0; i<str.length; i++){
//     if(str[i] === str[i].toUpperCase()){
//         result += str[i].toLowerCase();
//     }else{
//         result += str[i].toUpperCase();
//     }
// }
// console.log(result);

// write a program to make camilize strings.

// let str = "this is the javaScript";
// let words = str.split(" ");
// let camelizedWords = [];

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let camelizedWord =
//     i === 0
//       ? word.toLowerCase() // Keep the first word lowercase
//       : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize others
//   camelizedWords.push(camelizedWord);
// }

// let camelizedStr = camelizedWords.join("");

// console.log(camelizedStr); // "helloWorld"


// count the number of space in sentence
// let str = 'this is the learning of javascript'
// let spacess = '';
// for(let i=0; i<str.length-1; i++){
//     if(str[i] === ' '){
//         spacess += str[i];
//     }
// }
// console.log(spacess.length)

/*1111111111
222222222
33333333
4444444
555555
66666
7777
888
99
0*/

// for (let i = 1; i <= 10; i++) {
//     let num = i % 10; // This ensures 10 becomes 0
//     console.log(num.toString().repeat(11 - i));
//   }
  

// "My name is Sat narayan sah", take inpur from user  and print whateven is ther after the word.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a sentence: ", function(input) {
    rl.question("Enter a word to search for: ", function(word) {
        let index = input.indexOf(word);
        let output = "";

        if (index >= 0) {
            output = input.substring(index + word.length);
        }

        console.log("Output:", output);
        rl.close();
    });
});
