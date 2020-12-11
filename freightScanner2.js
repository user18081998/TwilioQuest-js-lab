function scan(arrayStrings){
    return [...Array(arrayStrings.length).keys()].map( i=> (arrayStrings[i] == "contraband" ? i : -1)).filter(x=> (x!=-1));
}