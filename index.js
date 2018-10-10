function produceDrivingRange(blockRange) {
  return function(beginAve, endAve) {
    begin = parseInt(beginAve)
    end = parseInt(endAve)
    distance = Math.abs(end - begin)
    //debugger
    if (distance > blockRange) {
      return `${distance - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - distance}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(bill) {
    return bill * tip
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
