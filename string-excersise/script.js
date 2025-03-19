// const str = "My name is learn javascript"; split this stirng using space and find length
// const str = "My name is learn javascript";
// // console.log(str.length)
// const words = str.split(' ');
// console.log(words.length)



// write the program to check is a tring is palindrome or not?
let str='maam';
let str2 = '';
for(let i=str.length-1; i>=0; i--){
    str2 += str[i];
}
if(str === str2){
    console.log('palindrome');
}else{
    console.log("Not palindrom")
}
