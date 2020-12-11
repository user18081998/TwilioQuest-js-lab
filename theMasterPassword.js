const passwordArray = [
    ['Q', 'W', 'E', 'R', 'T', 'Y'],
    ['A', 'S', 'D', 'F', 'G', 'H'],
    ['Z', 'X', 'C', 'V', 'B', 'N'],
    ['U', 'I', 'O', 'P', '!', '@'],
    ['H', 'J', 'K', 'L', '#', '$'],
    ['M', '%', '^', '&', '*', '?']
];
let password="";
password+=passwordArray[1][3]+passwordArray[3][4]+passwordArray[2][5]+passwordArray[3][4]+passwordArray[0][4]+passwordArray[0][2];
console.log(password);

