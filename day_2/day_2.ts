import * as fs from 'fs'

function runProgram(noun: number, verb: number): number {
  // Read input
  // let data: string = '1,0,0,0,99'
  let data = fs.readFileSync('input/day_2.txt').toString()
  let dataSlice = data.split(',').map(x => +x)

  // Perform "reset"
  dataSlice[1] = noun
  dataSlice[2] = verb

  for (let i = 0; i < dataSlice.length; i = i + 4) {
    let opIdx = i
    let op = dataSlice[opIdx] 

    if (op == 99) {
      return dataSlice[0]
    }

    let firstIdx = i+1
    let firstPos = dataSlice[firstIdx]
    let secondIdx = i+2
    let secondPos = dataSlice[secondIdx]
    let replaceIdx = i+3
    let replacePos = dataSlice[replaceIdx]

    switch (op) {
      case 1:
        dataSlice[replacePos] = (dataSlice[firstPos] + dataSlice[secondPos])
        break
      case 2:
        dataSlice[replacePos] = (dataSlice[firstPos] * dataSlice[secondPos])
        break
      default:
        console.log('invalid operation')
        break
    }
  }
}

function part1() {
  console.log('part 1 answer:', runProgram(12, 2))
}

function part2() {
var noun:number, verb:number

bruteforce:
  for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
      let output = runProgram(i, j)
      if (output == 19690720) {
        console.log('noun:', i, 'verb:', j)
        noun = i
        verb = j
        break bruteforce 
      }
    }
  }
  console.log('part 2 answer:', 100 * noun + verb)
}

part1()
part2()