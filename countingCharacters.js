const measureInput = input => {
    let output = []
    let strArr = input.split('');
    let lastChar = '';
    let tempObj = {}
    let currentN = -1
    for(char in strArr){
        if(strArr[char] === lastChar){
            tempObj[strArr[char]] +=1
        }else{
            output.push(tempObj);
            currentN +=1;
            tempObj = {};
            tempObj[strArr[char]] = 1
            lastChar = strArr[char];
        }
    }
    output.push(tempObj);
    output.shift();
    return output
}

let test = 'aaaabbbcca'
let test2 = ''
let test3 = 'asafdagsfgaaDbbcRca'
let test4 = '12ewrf4t'

console.log(measureInput(test));
console.log(measureInput(test2));
console.log(measureInput(test3));
console.log(measureInput(test4));