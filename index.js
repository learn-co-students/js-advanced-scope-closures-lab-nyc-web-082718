// produceDrivingRange() - Returns a function that then calculates whether a given trip is within range. For example, produceDrivingRange(10) returns a function that will return false if the trip is over 10 blocks distance and true if the distance is within range. So produceDrivingRange returns a function that we can then use to calculate if a trip is too large for a driver. We recommend referencing the test/indexTest.js for more details.

const produceDrivingRange = function (range) {
  return function (start, finish) {
    const startNum = Number.parseInt(start, 10)
    const finishNum = Number.parseInt(finish, 10)
    const distance = Math.abs(finishNum - startNum)
    if (distance < range) {
      return `within range by ${range - distance}`
    }
    else {
      return `${distance - range} blocks out of range`
    }
  }
}

// produceTipCalculator() - Returns a function that then calculates a tip. For example, produceTipCalculator(.10) returns a function that calculates ten percent tip on a fare. produceTipCalculator(.20) returns a function that calculates twenty percent tip on a fare.

const produceTipCalculator = function (percent) {
  return function (fare) {
    return fare * percent
  }
}

// createDriver is a function that returns a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.

const createDriver = function () {
  driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
}
