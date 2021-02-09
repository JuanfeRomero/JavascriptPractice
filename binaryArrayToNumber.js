const binaryArrayToNumber = (arr) => {
    let multiplier = 1;
    let total = 0 + arr.pop();
    if (arr.length === 0) {
        return total;
    }
    arr.reverse();
    arr.forEach((el) => {
        multiplier = multiplier * 2;
        total += el * multiplier;
    });
    return total;
};

console.log('Testing');

const testBatch = [
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [1, 1, 1, 1],
    [0, 1, 1, 0],
    [0],
    [1],
    [0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
];
const answerBatch = [1, 2, 15, 6, 0, 1, 13, 64, 1];

for (x in testBatch) {
    console.log(testBatch[x]);
    console.log(
        binaryArrayToNumber(testBatch[x]) +
            ' Deberia ser igual a ' +
            answerBatch[x]
    );
}
