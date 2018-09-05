function removeVowel(str) {
    return str = str.replace(/[aeiou]/gi, '');
}
console.log(removeVowel("hello"))


// function removeVowels(str) {
//     return str.split('').map(function(value,index){
//         // if(value !== 'a' || value !== 'e'|| value !== 'i'|| value !== 'o'|| value !== 'u')
//         // return;
//         if(value === 'a' || value === 'e'|| value === 'i'|| value === 'o'|| value === 'u')
//         return '';
        
//         else return value;
//     }).join('');
//   }

//   console.log(removeVowels('hello'))

