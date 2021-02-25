function morseCode(str) {
    code = '';
    for (const char of str) {
        switch (char.toLowerCase()) {
            case 'a':
                code = code + '.- ';
                break;
            case 'b':
                code = code + '-... ';
                break;
            case 'c':
                code = code + '-.-. ';
                break;
            case 'd':
                code = code + '-.. ';
                break;
            case 'e':
                code = code + '. ';
                break;
            case 'f':
                code = code + '..-. ';
                break;
            case 'g':
                code = code + '--. ';
                break;
            case 'h':
                code = code + '.... ';
                break;
            case 'i':
                code = code + '.. ';
                break;
            case 'j':
                code = code + '.--- ';
                break;
            case 'k':
                code = code + '-.- ';
                break;
            case 'l':
                code = code + '.-.. ';
                break;
            case 'm':
                code = code + '-- ';
                break;
            case 'n':
                code = code + '-. ';
                break;
            case 'o':
                code = code + '--- ';
                break;
            case 'p':
                code = code + '.--. ';
                break;
            case 'q':
                code = code + '--.- ';
                break;
            case 'r':
                code = code + '.-. ';
                break;
            case 's':
                code = code + '... ';
                break;
            case 't':
                code = code + '- ';
                break;
            case 'u':
                code = code + '..- ';
                break;
            case 'v':
                code = code + '...- ';
                break;
            case 'w':
                code = code + '.-- ';
                break;
            case 'x':
                code = code + '-..- ';
                break;
            case 'y':
                code = code + '-.-- ';
                break;
            case 'z':
                code = code + '--.. ';
                break;
            case '1':
                code = code + '.---- ';
                break;
            case '2':
                code = code + '..--- ';
                break;
            case '3':
                code = code + '...-- ';
                break;
            case '4':
                code = code + '....- ';
                break;
            case '5':
                code = code + '..... ';
                break;
            case '6':
                code = code + '-.... ';
                break;
            case '7':
                code = code + '--... ';
                break;
            case '8':
                code = code + '---.. ';
                break;
            case '9':
                code = code + '----. ';
                break;
            case '0':
                code = code + '----- ';
                break;
            case '.':
                code = code + '.-.-.- ';
                break;
            case ',':
                code = code + '--..-- ';
                break;
            case ' ':
                code = code + ' ';
                break;
            default:
                break;
        }
    }
    return code.substring(0, code.length - 1);
}

const testBatch = [
    `it's my life`,
    `and it's now or never, `,
    `like frankie said`,
    `I did it my way`,
    `I DON'T WANNA LIVE FOREVER`,
    `Hola`,
    `Javascript`,
];

testBatch.forEach((test) => {
    console.log(`El string '${test}' en codigo morse es: ${morseCode(test)}`);
});
