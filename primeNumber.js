const checkPrime = (num) => {
    if (num <= 1) {
        return false;
    } else if (num <= 3) {
        return true;
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    for (let i = 5; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

const testBatch = [
    -1,
    0,
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    11,
    13,
    15,
    123423,
    5464562,
    547759,
    12,
    3212,
];

testBatch.forEach((number) => {
    console.log(`El numero ${number} es primo: ${checkPrime(number)}`);
});
