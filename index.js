function produceDrivingRange(numOfBlocks) {
  return function blockRange(startLocation, endLocation) {
    let blocks = parseInt(endLocation) - parseInt(startLocation)

    if (numOfBlocks > blocks) {
      return `within range by ${numOfBlocks - blocks}`
    } else {
      return `${blocks - numOfBlocks} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function tipCalc(fare) {
    return fare * tip
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
