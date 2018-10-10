const produceDrivingRange = function(range) {
  return function(range1, range2) {
    if ((parseInt(range2) - parseInt(range1)) > range) {
      return `${(parseInt(range2) - parseInt(range1)) - range} blocks out of range`
    } else {
      return `within range by ${range - (parseInt(range2) - parseInt(range1))}`
    }
  }
}

const produceTipCalculator = function(percent) {
  return function(money) {
    return money * percent
  }
}

const createDriver = function(name, attribute) {
  let DriverID = 0

  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++DriverID;
    }
  }
}
