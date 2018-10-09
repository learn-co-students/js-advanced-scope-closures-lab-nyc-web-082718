const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    if (parseInt(end) - parseInt(start) > parseInt(blockRange)) {
      return `${parseInt(end) - parseInt(start) - parseInt(blockRange)} blocks out of range`
    } else {
    return `within range by ${parseInt(end) - parseInt(start)}`
    }
  }
}

const produceTipCalculator = function(fare) {
  return function(tip) {
    return fare * tip
  }
}

const createDriver = function(){
  let driverId = 0
  return class {
    constructor(name){
      this.name = name
      this.id = ++driverId
    }
  }
}
