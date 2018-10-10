function produceDrivingRange(range) {
  return function(block1, block2) {
    const blocks = Math.abs(Number(block2.replace('th', '')) - Number(block1.replace('th', '')))
    if (blocks <= range) {
      return `within range by ${range - blocks}`;
    }
    return `${blocks - range} blocks out of range`;
  }
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent
  }
}

function createDriver() {
  let id = 0
  return class {
    constructor(name) {
      this.name = name;
      this.driverId = ++id;
    }
  }
}
