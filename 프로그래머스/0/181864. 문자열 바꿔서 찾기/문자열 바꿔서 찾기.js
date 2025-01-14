function solution(myString, pat) {
    return myString.split('').map((character) => character === 'A' ? 'B' : 'A').join('').includes(pat) ? 1 : 0;
}