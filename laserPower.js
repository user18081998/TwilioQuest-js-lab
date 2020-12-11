function calculatePower(array){
    return array.map(x=>x*2).reduce((sum,acc)=>sum+acc, 0);
}