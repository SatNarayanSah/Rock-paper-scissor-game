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

let str = '9581894461';
let str1 = str.slice(0,5).padEnd(10,'*');
let str2 = str.slice(5,10).padStart(10,'*');
const str3 = str.slice(0, 3) + "**" + str.slice(5, 8) + "**";
console.log(str1);
console.log(str2);
console.log(str3);