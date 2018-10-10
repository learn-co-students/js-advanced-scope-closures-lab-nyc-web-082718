function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock) {
    let start = parseInt(startingBlock)
    let end = parseInt(endingBlock)
    let length = Math.abs(end-start)
    let difference = (blockRange - length)
    if( difference > 0) {
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(fare){
  return function(tip) {
    return (fare * tip)
  }
}

function createDriver(){
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId
    }
  }
}
