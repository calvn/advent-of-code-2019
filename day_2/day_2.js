"use strict";
exports.__esModule = true;
var fs = require("fs");
function runProgram(noun, verb) {
    // Read input
    // let data: string = '1,0,0,0,99'
    var data = fs.readFileSync('input/day_2.txt').toString();
    var dataSlice = data.split(',').map(function (x) { return +x; });
    // Perform "reset"
    dataSlice[1] = noun;
    dataSlice[2] = verb;
    for (var i = 0; i < dataSlice.length; i = i + 4) {
        var opIdx = i;
        var op = dataSlice[opIdx];
        if (op == 99) {
            return dataSlice[0];
        }
        var firstIdx = i + 1;
        var firstPos = dataSlice[firstIdx];
        var secondIdx = i + 2;
        var secondPos = dataSlice[secondIdx];
        var replaceIdx = i + 3;
        var replacePos = dataSlice[replaceIdx];
        switch (op) {
            case 1:
                dataSlice[replacePos] = (dataSlice[firstPos] + dataSlice[secondPos]);
                break;
            case 2:
                dataSlice[replacePos] = (dataSlice[firstPos] * dataSlice[secondPos]);
                break;
            default:
                console.log('invalid operation');
                break;
        }
    }
}
function part1() {
    console.log('part 1 answer:', runProgram(12, 2));
}
function part2() {
    var noun, verb;
    bruteforce: for (var i = 0; i < 100; i++) {
        for (var j = 0; j < 100; j++) {
            var output = runProgram(i, j);
            if (output == 19690720) {
                console.log('noun:', i, 'verb:', j);
                noun = i;
                verb = j;
                break bruteforce;
            }
        }
    }
    console.log('part 2 answer:', 100 * noun + verb);
}
part1();
part2();
