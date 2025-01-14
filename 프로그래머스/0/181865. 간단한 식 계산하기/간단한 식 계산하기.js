function solution(binomial) {
    const [str1, op, str2] = binomial.split(' ');
    const num1 = Number(str1);
    const num2 = Number(str2);
    
    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            return;
    }
}