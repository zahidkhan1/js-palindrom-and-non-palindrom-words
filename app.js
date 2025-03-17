
// let input = prompt("Enter a word: ");
// let reversedstr ="";
// for (let i = input.length - 1; i >= 0; i--) {
//   reversedstr += input[i];
// }
// if (input === reversedstr) {
//   console.log("The word is a palindrome");
// } else {
//   console.log("The word is not a palindrome");
// }


let date= new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let time = hours + ":" + minutes + ":" + seconds;
console.log(time);