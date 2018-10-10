const produceDrivingRange = (blockRange) => {
  return function(startBlock, endBlock) {
    // debugger;
    let start = parseInt(startBlock,10)
    let end = parseInt(endBlock,10)
    let distance = Math.abs(end - start)
    if (distance > blockRange) {
      return `${Math.abs(distance - blockRange)} blocks out of range`;
    } else {
      return `within range by ${Math.abs(distance - blockRange)}`;
    }
  }
}

const produceTipCalculator = (percentage) => {
  return function(fareAmt) {
    return fareAmt * percentage
  }
}

const createDriver = () => {
  let driverId = 0
  return class {
    constructor(name){
      this.id = driverId++
      this.name = name
    }
  }
}
