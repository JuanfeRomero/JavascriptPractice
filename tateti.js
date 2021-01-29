const ticTacToe = (arr) => {
    let horizontal = '';
    let vertical = '';
    let diagonal = '';
    let espacio = 0;
    for (let i = 0; i < arr.length; i++) {
        horizontal = `${arr[i][0]}${arr[i][1]}${arr[i][2]}`;
        vertical = `${arr[0][i]}${arr[1][i]}${arr[2][i]}`;
        switch (i) {
            case 0:
                diagonal = `${arr[i][0]}${arr[1][1]}${arr[2][2]}`;
                break;
            case 1:
                diagonal = '';
                break;
            case 2:
                diagonal = `${arr[0][i]}${arr[1][1]}${arr[2][0]}`;
                break;
            default:
                return console.error(`this shouldn't happen`);
        }
        if (horizontal === 'OOO' || vertical === 'OOO' || diagonal === 'OOO') {
            return 'O';
        } else if (
            horizontal === 'XXX' ||
            vertical === 'XXX' ||
            diagonal === 'XXX'
        ) {
            return 'X';
        } else if (
            horizontal.length != 3 ||
            vertical.length != 3 ||
            diagonal.length != 3
        ) {
            espacio += 1;
        }
    }
    return espacio > 1 ? 'draw' : 'tie';
};

console.log('tests:');

console.log(`should return "tie"`);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
    ])
);

console.log(`should return "O" 3 times`);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', 'O', 'O'],
        ['O', 'O', 'X'],
    ])
);
console.log(
    ticTacToe([
        ['O', 'X', 'X'],
        ['X', 'O', 'X'],
        ['O', 'O', 'O'],
    ])
);
console.log(
    ticTacToe([
        ['O', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
    ])
);

console.log(`should return "X" 3 times`);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', 'O', 'X'],
        ['O', 'X', 'X'],
    ])
);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', 'X', 'X'],
        ['O', 'X', 'O'],
    ])
);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', 'X', 'O'],
        ['O', 'X', 'X'],
    ])
);

console.log(`should return "draw"`);
console.log(
    ticTacToe([
        ['X', 'O', 'X'],
        ['X', '', 'X'],
        ['O', 'X', 'O'],
    ])
);
module.exports = ticTacToe;
