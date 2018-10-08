// Code here ?
function produceDrivingRange(range) {
  return function(start, end) {
    tripBlocks = parseInt(end) - parseInt(start)
    if (range > tripBlocks) {
      return `within range by ${range - tripBlocks}`
    } else {
      return `${tripBlocks - range} blocks out of range`
    }
  };
}

function produceTipCalculator(percent) {
  return function(totalBill) {
    return percent * totalBill
  }
}

function createDriver(){
  return {}
}

function createDriver() {
  let DriverId = 0
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name
      this.id = ++DriverId
    }
  }
}
