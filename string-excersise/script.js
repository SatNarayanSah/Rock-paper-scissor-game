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

let str = "this is the javaScript";
let words = str.split(" ");
let camelizedWords = [];

for (let i = 0; i < words.length; i++) {
  let word = words[i];
  let camelizedWord =
    i === 0
      ? word.toLowerCase() // Keep the first word lowercase
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); // Capitalize others
  camelizedWords.push(camelizedWord);
}

let camelizedStr = camelizedWords.join("");

console.log(camelizedStr); // "helloWorld"
