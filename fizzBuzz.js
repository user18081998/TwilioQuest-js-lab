const number = parseInt(process.argv[2]);
let result ="";
if(number%3==0) result="Java";
if(number%5==0) result+="Script";
console.log(result==""? number : result);