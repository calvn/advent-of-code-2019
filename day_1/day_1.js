"use strict";
exports.__esModule = true;
var fs = require("fs");
function calculateFuel(mass) {
    return Math.floor(mass / 3) - 2;
}
function calculateTotalFuel(considerFuelMass) {
    var data = fs.readFileSync('input/day_1_input.txt').toString();
    var textByLine = data.split('\n');
    var totalFuel = 0;
    textByLine.forEach(function (line) {
        var moduleFuel = calculateFuel(+line);
        totalFuel += moduleFuel;
        if (considerFuelMass) {
            var remainingFuel = moduleFuel;
            while (remainingFuel > 0) {
                remainingFuel = calculateFuel(remainingFuel);
                if (remainingFuel <= 0) {
                    break;
                }
                totalFuel += remainingFuel;
            }
        }
    });
    return totalFuel;
}
console.log(calculateTotalFuel(false));
console.log(calculateTotalFuel(true));
