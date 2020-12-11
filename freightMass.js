function calculateMass(array){
    return array.reduce((sum,word)=>sum+word.length, 0);
}