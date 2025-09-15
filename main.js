
// 1-misol
const reverseWord = str3.split(' ').reverse().join(' ');
console.log(reverseWord);

// 2-misol
let str5 = 'salom hasan aka'
const result2 = str5
  .split(" ") 
  .map(word => word[0].toUpperCase() + word.slice(1)) 
  .join(" ");
console.log(result2);

// 3-misol
console.log(str.split(' ').length);

// 4-misol
console.log(str.split(' ').join(','));
console.log(str.split('').join(','));




// 5-misol
const str4 = 'alem2008';

let onlyNums = str4.replace(/[a-zA-Z]/g, ''); 
console.log(`${str4} -> ${onlyNums}`); 

//6-misol
const str3 = 'salom men alem'
console.log(str3.split('a').join('o'));

// 7-misol
console.log(str3.slice(15, 20));

// 8-misol
const str2 = 'a l e m'
console.log(str2.split(' ').join(''));

// 9-misol
const vowels = 'wvjijendvn';
const arr = str3.split('')
const onlyVowels = arr.filter(ch => vowels.includes(ch.toLowerCase()));
console.log(onlyVowels.length + 'ta unli harf mavjud');


// 10-misol
let result = "";

for (let i = str.length -1; i >= 0; i--) {
    result += str[i];
}

console.log(result);
