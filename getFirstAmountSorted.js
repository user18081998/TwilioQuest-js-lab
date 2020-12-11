function getFirstAmountSorted(array,number){
    return array.length>=number ? array.sort().slice(0,number) : array.sort();
}