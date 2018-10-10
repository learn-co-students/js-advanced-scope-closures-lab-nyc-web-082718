const produceDrivingRange = function(blockRange) {
  return function(start, end) {
    if (parseInt(end) - parseInt(start) > parseInt(blockRange)) {
      return `${parseInt(end) - parseInt(start) - parseInt(blockRange)} blocks out of range`
    } else {
    return `within range by ${parseInt(end) - parseInt(start)}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(mealPrice) {
    return mealPrice * percentage
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
