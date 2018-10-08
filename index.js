const produceDrivingRange = function(range) {
  return function(start, end) {
    const dist = Math.abs(parseInt(end) - parseInt(start));
    return dist > range ? `${dist - range} blocks out of range` : `within range by ${range - dist}` ;
  }
}

const produceTipCalculator = function(percent) {
  return function(amount) {
    return amount * percent;
  }
}

const createDriver = function() {
  let DriverID = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverID;
    }
  }
}
