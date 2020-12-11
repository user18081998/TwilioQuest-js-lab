let array=[];
array.push(process.argv[2].toLowerCase());
array.push(process.argv[3].toLowerCase());
if(array[0].toUpperCase()==array[1].toUpperCase()) console.log(0);
else{
    if(Array.from(array).sort()[0]==array[0] && Array.from(array).sort()[1]==array[1]) console.log(-1);
    else console.log(1);
}