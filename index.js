function produceDrivingRange(limit){
  return function(block1,block2) {
    let range = Math.abs(Number.parseInt(block1) - Number.parseInt(block2))
    switch (limit > range){
      case (true):
        return `within range by ${limit - range}`;
        break;
      case (false):
        return `${range - limit} blocks out of range`
        break;
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
    return tip*fare
  }
}

function createDriver(){
  driverId = 0
  return class driver{
    constructor(name){
      this.name = name;
      this.id = driverId++;
    }
  }
}
