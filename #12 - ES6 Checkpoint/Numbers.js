// https://www.codewars.com/kata/57356c55867b9b7a60000bd7
function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}

// https://www.codewars.com/kata/555eded1ad94b00403000071
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
}

// https://www.codewars.com/kata/582cb0224e56e068d800003c
function litres(time) {
    return Math.floor(time*0.5);
}

// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097
function century(year) {
    return Math.ceil(year/100);
}

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
function maps(x){
    return x.map(e => e * 2);
}