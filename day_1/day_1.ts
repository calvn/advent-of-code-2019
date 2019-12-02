import * as fs from 'fs'

function calculateFuel(mass: number): number {
  return Math.floor(mass / 3) - 2
}

function calculateTotalFuel(considerFuelMass: boolean): number {
  let data = fs.readFileSync('input/day_1_input.txt').toString()
  let textByLine = data.split('\n')
  let totalFuel = 0

  textByLine.forEach(function (line: string) {
    let moduleFuel = calculateFuel(+line)
    totalFuel += moduleFuel

    if (considerFuelMass) {
      let remainingFuel = moduleFuel
      while (remainingFuel > 0) {
        remainingFuel = calculateFuel(remainingFuel)

        if (remainingFuel <= 0) {
          break
        }

        totalFuel += remainingFuel
      }
    }
  })

  return totalFuel
}

console.log(calculateTotalFuel(false))
console.log(calculateTotalFuel(true))

