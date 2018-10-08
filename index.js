const produceDrivingRange = function(blockRange) {
  return function(first, second){
    if ((parseInt(second) - parseInt(first)) > blockRange){
      return `${parseInt(second)- (parseInt(first)+ blockRange)} blocks out of range`
  } else {
    return `within range by ${parseInt(second) -parseInt(first)}`
  }
}
}

const produceTipCalculator = function(tip){
  return function(fare){
    return fare * tip
  }
}

function createDriver(){
  let driverId = 0
  return class {
    constructor(name) {
      this.name = name
      this.id = ++driverId;
    }
  }
}
